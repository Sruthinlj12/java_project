from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import os
import nltk
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

# Get absolute path for dataset
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.path.join(BASE_DIR, "top10K-TMDB-movies.csv")

# Load and preprocess dataset
movies = pd.read_csv(CSV_PATH)

# Drop unnecessary columns and handle missing values
movies = movies.drop(columns=['popularity', 'release_date', 'vote_average', 'vote_count'])
movies.dropna(inplace=True)

# Tokenization
movies['overview'] = movies['overview'].astype(str).apply(lambda x: x.split())
movies['genre'] = movies['genre'].astype(str).apply(lambda x: x.split())
movies['tags'] = movies['overview'] + movies['genre']

# Create a new dataframe with processed tags
new_df = movies[['id', 'title', 'tags']].copy()
new_df['tags'] = new_df['tags'].apply(lambda x: ' '.join(x).lower())

# Apply stemming
ps = PorterStemmer()
new_df['tags'] = new_df['tags'].apply(lambda x: " ".join([ps.stem(word) for word in x.split()]))

# Convert text into numerical vectors
cv = CountVectorizer(max_features=5000, stop_words='english')
vector = cv.fit_transform(new_df['tags']).toarray()

# Compute similarity matrix
similarity = cosine_similarity(vector)

# Recommendation function
def recommend(movie):
    movie = movie.lower()  # Normalize input case
    if movie not in new_df['title'].str.lower().values:
        return []
    
    index = new_df[new_df['title'].str.lower() == movie].index[0]
    distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    
    recommendations = [new_df.iloc[i[0]].title for i in distances[1:11]]  # Get top 10 recommendations
    return recommendations

# API endpoint for recommendations
@app.route('/recommend', methods=['POST'])
def get_recommendations():
    data = request.json
    movie_name = data.get('movie', '').strip()

    if not movie_name:
        return jsonify({'error': 'Movie name is required'}), 400

    recommendations = recommend(movie_name)
    if not recommendations:
        return jsonify({'error': 'Movie not found'}), 404

    return jsonify({'recommendations': recommendations})

# Run Flask app
if __name__ == '__main__':
    app.run(debug=True, port=5000)
