import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllCompleted.css';

function AllCompleted() {
    const data = [{
        "success": true,
        "data": {
            "leaderboard": [
                {
                    "rank": 1,
                    "_id": "68f8b1d8854ec983b29d7190",
                    "email": "23aiath004@ldce.ac.in",
                    "name": "Atharva Sanjay Chitre",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/181fe602-a097-43e0-aaab-f1ede553ae55",
                    "house_id": 1,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week2": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-25T08:20:52.857Z",
                    "createdAt": "2025-10-22T10:28:40.159Z",
                    "updatedAt": "2025-10-25T08:20:52.858Z",
                    "progressReachedAt": "2025-10-25T08:20:48.857Z",
                    "total_completed": 20
                },
                {
                    "rank": 2,
                    "_id": "68f8b1d9854ec983b29d71e4",
                    "email": "mehtakaran165@gmail.com",
                    "name": "Mehta Karan Tusharbhai",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/91f1fcd2-e6ec-47ef-9aaa-788055c04162",
                    "house_id": 4,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week2": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-25T08:20:54.015Z",
                    "createdAt": "2025-10-22T10:28:41.480Z",
                    "updatedAt": "2025-10-25T08:20:54.016Z",
                    "progressReachedAt": "2025-10-25T08:20:50.015Z",
                    "total_completed": 20
                },
                {
                    "rank": 3,
                    "_id": "68f8b1dc854ec983b29d7284",
                    "email": "singhhardik398@gmail.com",
                    "name": "Hardik Singh",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/f02a73df-0f83-4815-894a-e6ccb4b71aeb",
                    "house_id": 2,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week2": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-25T08:20:56.262Z",
                    "createdAt": "2025-10-22T10:28:44.684Z",
                    "updatedAt": "2025-10-25T08:20:51.262Z",
                    "progressReachedAt": "2025-10-25T08:20:51.262Z",
                    "total_completed": 20
                },
                {
                    "rank": 4,
                    "_id": "68f8b1d4854ec983b29d709c",
                    "email": "vanjarajuhi2611@gmail.com",
                    "name": "Vanjara Juhi Bipinkumar",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/4295c6a6-97cc-4234-a05c-b2c4f840d06f",
                    "house_id": 7,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week2": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-25T08:20:49.260Z",
                    "createdAt": "2025-10-22T10:28:36.279Z",
                    "updatedAt": "2025-10-25T08:20:55.262Z",
                    "progressReachedAt": "2025-10-25T08:20:55.260Z",
                    "total_completed": 20
                },
                {
                    "rank": 5,
                    "_id": "68f8b1d6854ec983b29d7138",
                    "email": "yashvisanghvi1812@gmail.com",
                    "name": "Yashvi Sanghvi",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/49d7dae2-f522-4a2e-a9e6-66d5a9fc27c0",
                    "house_id": 7,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week2": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-26T08:22:51.796Z",
                    "createdAt": "2025-10-22T10:28:38.737Z",
                    "updatedAt": "2025-10-26T08:22:51.797Z",
                    "progressReachedAt": "2025-10-26T08:22:51.796Z",
                    "total_completed": 20
                },
                {
                    "rank": 6,
                    "_id": "68f8b1d8854ec983b29d71c0",
                    "email": "kalpanagupta592004@gmail.com",
                    "name": "Kalpana Gupta",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/3e1a2248-32f5-41cd-8241-a6b8dc352928",
                    "house_id": 6,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week2": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-26T08:22:54.676Z",
                    "createdAt": "2025-10-22T10:28:40.895Z",
                    "updatedAt": "2025-10-26T08:22:54.677Z",
                    "progressReachedAt": "2025-10-26T08:22:52.676Z",
                    "total_completed": 20
                },
                {
                    "rank": 7,
                    "_id": "68f8b1dc854ec983b29d728c",
                    "email": "fattaniabhavya@gmail.com",
                    "name": "Bhavya Fattania",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/93737090-3d56-4bb3-a2b0-c81d7ff15fe7",
                    "house_id": 1,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week2": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-26T08:22:58.710Z",
                    "createdAt": "2025-10-22T10:28:44.825Z",
                    "updatedAt": "2025-10-26T08:22:58.719Z",
                    "progressReachedAt": "2025-10-26T08:22:59.710Z",
                    "total_completed": 20
                },
                {
                    "rank": 8,
                    "_id": "68f8b1da854ec983b29d721c",
                    "email": "kukshishah30107@gmail.com",
                    "name": "Kukshi Shah",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/4ee67f7f-69c9-45c1-9181-d63ef86977c0",
                    "house_id": 3,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week2": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-26T08:22:56.296Z",
                    "createdAt": "2025-10-22T10:28:42.581Z",
                    "updatedAt": "2025-10-26T08:22:56.297Z",
                    "progressReachedAt": "2025-10-26T08:23:56.296Z",
                    "total_completed": 20
                },
                {
                    "rank": 9,
                    "_id": "68f8b1d8854ec983b29d71b4",
                    "email": "parv141206@gmail.com",
                    "name": "Parv Amitkumar Shah",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/5c891c09-95db-4cde-82c2-cb9304bc7f51",
                    "house_id": 5,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week2": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-26T08:22:54.463Z",
                    "createdAt": "2025-10-22T10:28:40.710Z",
                    "updatedAt": "2025-10-26T08:22:54.464Z",
                    "progressReachedAt": "2025-10-26T08:24:54.463Z",
                    "total_completed": 20
                },
                {
                    "rank": 10,
                    "_id": "68f8b1d3854ec983b29d708c",
                    "email": "indrajeetsinh3306@gmail.com",
                    "name": "Dodiya Indrajeetsinh Pravinbhai",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/f857c79e-cb8b-4300-b516-04b604b4369e",
                    "house_id": 2,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 12,
                        "labs_completed": 1,
                        "total_completed": 13
                    },
                    "week2": {
                        "badges_completed": 7,
                        "labs_completed": 0,
                        "total_completed": 7
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-27T08:16:53.750Z",
                    "createdAt": "2025-10-22T10:28:35.706Z",
                    "updatedAt": "2025-10-27T08:16:53.751Z",
                    "progressReachedAt": "2025-10-27T08:16:53.750Z",
                    "total_completed": 20
                },
                {
                    "rank": 11,
                    "_id": "68f8b1d3854ec983b29d7094",
                    "email": "shahsaumya510@gmail.com",
                    "name": "Saumya Shah",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/b7fe4338-791b-4d99-9134-e520c8c27fa4",
                    "house_id": 6,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 19,
                        "labs_completed": 0,
                        "total_completed": 19
                    },
                    "week2": {
                        "badges_completed": 0,
                        "labs_completed": 1,
                        "total_completed": 1
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-27T08:16:53.882Z",
                    "createdAt": "2025-10-22T10:28:35.908Z",
                    "updatedAt": "2025-10-27T08:16:53.883Z",
                    "progressReachedAt": "2025-10-27T08:16:53.882Z",
                    "total_completed": 20
                },
                {
                    "rank": 12,
                    "_id": "68f8b1d5854ec983b29d70d0",
                    "email": "dhruvishchudasama2294@gmail.com",
                    "name": "Dhruvish Chudasama",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/06b7ba58-8706-45fc-9e2d-ef84c6d28cdf",
                    "house_id": 2,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 5,
                        "labs_completed": 0,
                        "total_completed": 5
                    },
                    "week2": {
                        "badges_completed": 14,
                        "labs_completed": 1,
                        "total_completed": 15
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-27T08:16:54.973Z",
                    "createdAt": "2025-10-22T10:28:37.140Z",
                    "updatedAt": "2025-10-27T08:16:54.975Z",
                    "progressReachedAt": "2025-10-27T08:16:54.973Z",
                    "total_completed": 20
                },
                {
                    "rank": 13,
                    "_id": "68f8b1d5854ec983b29d70fc",
                    "email": "jaymehta.developement@gmail.com",
                    "name": "Jay Mehta",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/f7658c49-7a3c-4f4e-8c70-8aea14e3b5aa",
                    "house_id": 4,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 19,
                        "labs_completed": 0,
                        "total_completed": 19
                    },
                    "week2": {
                        "badges_completed": 0,
                        "labs_completed": 1,
                        "total_completed": 1
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-27T08:16:55.731Z",
                    "createdAt": "2025-10-22T10:28:37.828Z",
                    "updatedAt": "2025-10-27T08:16:55.732Z",
                    "progressReachedAt": "2025-10-27T08:16:55.731Z",
                    "total_completed": 20
                },
                {
                    "rank": 14,
                    "_id": "68f8b1d6854ec983b29d710c",
                    "email": "gdgoc2404@gmail.com",
                    "name": "Patel ShreyKumar kiritbhai",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/b19fcfa0-6c23-48e7-a1df-2ceef1dcb334",
                    "house_id": 5,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 17,
                        "labs_completed": 0,
                        "total_completed": 17
                    },
                    "week2": {
                        "badges_completed": 2,
                        "labs_completed": 1,
                        "total_completed": 3
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-27T08:16:55.987Z",
                    "createdAt": "2025-10-22T10:28:38.066Z",
                    "updatedAt": "2025-10-27T08:16:55.988Z",
                    "progressReachedAt": "2025-10-27T08:16:55.987Z",
                    "total_completed": 20
                },
                {
                    "rank": 15,
                    "_id": "68f8b1da854ec983b29d7218",
                    "email": "saximandli18@gmail.com",
                    "name": "Mandli Saxi Taxeshbhai",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/42d60f11-3fdb-489e-a2aa-5a5c0b49d56d",
                    "house_id": 4,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 15,
                        "labs_completed": 0,
                        "total_completed": 15
                    },
                    "week2": {
                        "badges_completed": 4,
                        "labs_completed": 1,
                        "total_completed": 5
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-27T08:17:00.773Z",
                    "createdAt": "2025-10-22T10:28:42.519Z",
                    "updatedAt": "2025-10-27T08:17:00.774Z",
                    "progressReachedAt": "2025-10-27T08:17:00.773Z",
                    "total_completed": 20
                },
                {
                    "rank": 16,
                    "_id": "68f8b1dc854ec983b29d7290",
                    "email": "milikava765@gmail.com",
                    "name": "Mili Kava",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/3c44b3cd-fabf-4368-acf1-ff129536a140",
                    "house_id": 4,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 9,
                        "labs_completed": 1,
                        "total_completed": 10
                    },
                    "week2": {
                        "badges_completed": 10,
                        "labs_completed": 0,
                        "total_completed": 10
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-27T08:17:02.923Z",
                    "createdAt": "2025-10-22T10:28:44.888Z",
                    "updatedAt": "2025-10-27T08:17:02.924Z",
                    "progressReachedAt": "2025-10-27T08:17:02.923Z",
                    "total_completed": 20
                },
                {
                    "rank": 17,
                    "_id": "68f8b1dd854ec983b29d72a8",
                    "email": "24csyas119@ldce.ac.in",
                    "name": "YASH PRAJAPATI",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/590b38b8-37c6-450d-9df8-a9eac64e986b",
                    "house_id": 7,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 18,
                        "labs_completed": 0,
                        "total_completed": 18
                    },
                    "week2": {
                        "badges_completed": 1,
                        "labs_completed": 1,
                        "total_completed": 2
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-27T08:17:03.293Z",
                    "createdAt": "2025-10-22T10:28:45.252Z",
                    "updatedAt": "2025-10-27T08:17:03.294Z",
                    "progressReachedAt": "2025-10-27T08:17:03.293Z",
                    "total_completed": 20
                },
                {
                    "rank": 18,
                    "_id": "68f8b1d3854ec983b29d7078",
                    "email": "chaudharirohan2825@gmail.com",
                    "name": "Chaudhari Rohan Rakeshbhai",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/65dd142c-0964-4cd0-8d85-33d7aace5825",
                    "house_id": 1,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 19,
                        "labs_completed": 0,
                        "total_completed": 19
                    },
                    "week2": {
                        "badges_completed": 0,
                        "labs_completed": 1,
                        "total_completed": 1
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-28T08:27:00.187Z",
                    "createdAt": "2025-10-22T10:28:35.300Z",
                    "updatedAt": "2025-10-28T08:27:00.188Z",
                    "progressReachedAt": "2025-10-28T08:27:00.187Z",
                    "total_completed": 20
                },
                {
                    "rank": 19,
                    "_id": "68f8b1d5854ec983b29d70e8",
                    "email": "doshiiiarth12@gmail.com",
                    "name": "Arth Doshi",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/8917111b-5bb1-480f-b10b-330051c6dde9",
                    "house_id": 2,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 15,
                        "labs_completed": 0,
                        "total_completed": 15
                    },
                    "week2": {
                        "badges_completed": 4,
                        "labs_completed": 1,
                        "total_completed": 5
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-28T08:27:02.233Z",
                    "createdAt": "2025-10-22T10:28:37.497Z",
                    "updatedAt": "2025-10-28T08:27:02.234Z",
                    "progressReachedAt": "2025-10-28T08:27:02.233Z",
                    "total_completed": 20
                },
                {
                    "rank": 20,
                    "_id": "68f8b1d5854ec983b29d70f8",
                    "email": "patelkrish9107@gmail.com",
                    "name": "Krish Dipakbhai Patel",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/bbfcc177-9c67-4773-a85f-3a9370e2e0a0",
                    "house_id": 3,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 7,
                        "labs_completed": 0,
                        "total_completed": 7
                    },
                    "week2": {
                        "badges_completed": 12,
                        "labs_completed": 1,
                        "total_completed": 13
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-28T08:27:02.524Z",
                    "createdAt": "2025-10-22T10:28:37.767Z",
                    "updatedAt": "2025-10-28T08:27:02.526Z",
                    "progressReachedAt": "2025-10-28T08:27:02.524Z",
                    "total_completed": 20
                },
                {
                    "rank": 21,
                    "_id": "68f8b1d7854ec983b29d7160",
                    "email": "darshj1216@gmail.com",
                    "name": "Daraji Darshan.J",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/1b64771c-f8d5-4ada-b1e2-9e41e02adbe6",
                    "house_id": 1,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 18,
                        "labs_completed": 0,
                        "total_completed": 18
                    },
                    "week2": {
                        "badges_completed": 1,
                        "labs_completed": 1,
                        "total_completed": 2
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-28T08:27:04.332Z",
                    "createdAt": "2025-10-22T10:28:39.352Z",
                    "updatedAt": "2025-10-28T08:27:04.332Z",
                    "progressReachedAt": "2025-10-28T08:27:04.332Z",
                    "total_completed": 20
                },
                {
                    "rank": 22,
                    "_id": "68f8b1d7854ec983b29d7174",
                    "email": "amolrawat2402@gmail.com",
                    "name": "Amol PramodKumar Rawat",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/b0f5acc6-d619-4ca6-96eb-e302429c76d9",
                    "house_id": 1,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 1,
                        "labs_completed": 0,
                        "total_completed": 1
                    },
                    "week2": {
                        "badges_completed": 18,
                        "labs_completed": 1,
                        "total_completed": 19
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-28T08:27:04.687Z",
                    "createdAt": "2025-10-22T10:28:39.699Z",
                    "updatedAt": "2025-10-28T08:27:04.688Z",
                    "progressReachedAt": "2025-10-28T08:27:04.687Z",
                    "total_completed": 20
                },
                {
                    "rank": 23,
                    "_id": "68f8b1d7854ec983b29d717c",
                    "email": "24cspiy166@ldce.ac.in",
                    "name": "Bhati Piyush Pramod",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/96b19b24-8883-40a7-9990-152e3887f647",
                    "house_id": 1,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 7,
                        "labs_completed": 0,
                        "total_completed": 7
                    },
                    "week2": {
                        "badges_completed": 12,
                        "labs_completed": 1,
                        "total_completed": 13
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-28T08:27:04.823Z",
                    "createdAt": "2025-10-22T10:28:39.833Z",
                    "updatedAt": "2025-10-28T08:27:04.824Z",
                    "progressReachedAt": "2025-10-28T08:27:04.823Z",
                    "total_completed": 20
                },
                {
                    "rank": 24,
                    "_id": "68f8b1d8854ec983b29d718c",
                    "email": "23csman153@ldce.ac.in",
                    "name": "MANTHAN RAVINDRABHAI VASOYA",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/61843d87-6444-41e7-abea-d9f3c760ebf1",
                    "house_id": 4,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 6,
                        "labs_completed": 0,
                        "total_completed": 6
                    },
                    "week2": {
                        "badges_completed": 13,
                        "labs_completed": 1,
                        "total_completed": 14
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-28T08:27:05.051Z",
                    "createdAt": "2025-10-22T10:28:40.093Z",
                    "updatedAt": "2025-10-28T08:27:05.052Z",
                    "progressReachedAt": "2025-10-28T08:27:05.051Z",
                    "total_completed": 20
                },
                {
                    "rank": 25,
                    "_id": "68f8b1d9854ec983b29d71d8",
                    "email": "janiarjun222@gmail.com",
                    "name": "Jani Arjun Rajeshkumar",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/ea171cb6-eda6-4593-a96d-be2e9da9c089",
                    "house_id": 3,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 4,
                        "labs_completed": 1,
                        "total_completed": 5
                    },
                    "week2": {
                        "badges_completed": 15,
                        "labs_completed": 0,
                        "total_completed": 15
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-28T08:27:06.446Z",
                    "createdAt": "2025-10-22T10:28:41.297Z",
                    "updatedAt": "2025-10-28T08:27:06.447Z",
                    "progressReachedAt": "2025-10-28T08:27:06.446Z",
                    "total_completed": 20
                },
                {
                    "rank": 26,
                    "_id": "68f8b1db854ec983b29d7230",
                    "email": "manthanmovaliya9@gmail.com",
                    "name": "Manthan Jagdishbhai Movaliya",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/ded08653-19de-405c-aded-0aa7928d0f49",
                    "house_id": 4,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 14,
                        "labs_completed": 0,
                        "total_completed": 14
                    },
                    "week2": {
                        "badges_completed": 5,
                        "labs_completed": 1,
                        "total_completed": 6
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-28T08:27:07.758Z",
                    "createdAt": "2025-10-22T10:28:43.129Z",
                    "updatedAt": "2025-10-28T08:27:07.759Z",
                    "progressReachedAt": "2025-10-28T08:27:07.758Z",
                    "total_completed": 20
                },
                {
                    "rank": 27,
                    "_id": "68f8b1db854ec983b29d7234",
                    "email": "parmarkrish005@gmail.com",
                    "name": "Parmar krish Dharmeshbhai",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/d555797f-03bd-4a62-8840-807bf14a2e19",
                    "house_id": 5,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 8,
                        "labs_completed": 0,
                        "total_completed": 8
                    },
                    "week2": {
                        "badges_completed": 11,
                        "labs_completed": 1,
                        "total_completed": 12
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-28T08:27:07.823Z",
                    "createdAt": "2025-10-22T10:28:43.188Z",
                    "updatedAt": "2025-10-28T08:27:07.823Z",
                    "progressReachedAt": "2025-10-28T08:27:07.823Z",
                    "total_completed": 20
                },
                {
                    "rank": 28,
                    "_id": "68f8b1dc854ec983b29d7288",
                    "email": "hithinsu2006@gmail.com",
                    "name": "Hinsu hit",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/33786e62-234f-4df3-8e1a-75dbeea63ab5",
                    "house_id": 2,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week2": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-28T08:27:09.100Z",
                    "createdAt": "2025-10-22T10:28:44.741Z",
                    "updatedAt": "2025-10-28T08:27:09.101Z",
                    "progressReachedAt": "2025-10-28T08:27:09.100Z",
                    "total_completed": 20
                },
                {
                    "rank": 29,
                    "_id": "68f8b1e0854ec983b29d7354",
                    "email": "parmarfalguni005@gmail.com",
                    "name": "Parmar Falguni Ashokbhai",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/bd650b30-ee98-4f23-b677-a15d9cf6b515",
                    "house_id": 4,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 8,
                        "labs_completed": 0,
                        "total_completed": 8
                    },
                    "week2": {
                        "badges_completed": 11,
                        "labs_completed": 1,
                        "total_completed": 12
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-28T08:27:12.530Z",
                    "createdAt": "2025-10-22T10:28:48.394Z",
                    "updatedAt": "2025-10-28T08:27:12.532Z",
                    "progressReachedAt": "2025-10-28T08:27:12.531Z",
                    "total_completed": 20
                },
                {
                    "rank": 30,
                    "_id": "68f8b1e0854ec983b29d735c",
                    "email": "nakhvadiya@gmail.com",
                    "name": "Diya Nakhva",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/60a2e76e-e995-4e0d-b271-097aa8328cf3",
                    "house_id": 2,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 13,
                        "labs_completed": 0,
                        "total_completed": 13
                    },
                    "week2": {
                        "badges_completed": 6,
                        "labs_completed": 1,
                        "total_completed": 7
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-28T08:27:12.645Z",
                    "createdAt": "2025-10-22T10:28:48.551Z",
                    "updatedAt": "2025-10-28T08:27:12.646Z",
                    "progressReachedAt": "2025-10-28T08:27:12.645Z",
                    "total_completed": 20
                },
                {
                    "rank": 31,
                    "_id": "68f8b1d5854ec983b29d70cc",
                    "email": "chauhan.nishit212@gmail.com",
                    "name": "Chauhan Nishit DhavalBhai",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/d9b00454-3be1-4c9e-93f9-fd10b2ff3d3c",
                    "house_id": 1,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week2": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-29T08:23:52.435Z",
                    "createdAt": "2025-10-22T10:28:37.076Z",
                    "updatedAt": "2025-10-29T08:23:52.436Z",
                    "progressReachedAt": "2025-10-29T08:23:52.435Z",
                    "total_completed": 20
                },
                {
                    "rank": 32,
                    "_id": "68f8b1d7854ec983b29d7158",
                    "email": "jethavajay930@gmail.com",
                    "name": "Jethva Jay S.",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/82cbc02a-953f-4086-90a4-b16a27a8811a",
                    "house_id": 3,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 1,
                        "labs_completed": 0,
                        "total_completed": 1
                    },
                    "week2": {
                        "badges_completed": 18,
                        "labs_completed": 1,
                        "total_completed": 19
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-29T08:23:54.363Z",
                    "createdAt": "2025-10-22T10:28:39.208Z",
                    "updatedAt": "2025-10-29T08:23:54.364Z",
                    "progressReachedAt": "2025-10-29T08:23:54.363Z",
                    "total_completed": 20
                },
                {
                    "rank": 33,
                    "_id": "68f8b1d7854ec983b29d7178",
                    "email": "pskubavat31@gmail.com",
                    "name": "Pranav S Kubavat",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/6ee5c84c-375f-4d14-bf68-f3398545017b",
                    "house_id": 5,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 5,
                        "labs_completed": 0,
                        "total_completed": 5
                    },
                    "week2": {
                        "badges_completed": 14,
                        "labs_completed": 1,
                        "total_completed": 15
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-29T08:23:54.762Z",
                    "createdAt": "2025-10-22T10:28:39.768Z",
                    "updatedAt": "2025-10-29T08:23:54.763Z",
                    "progressReachedAt": "2025-10-29T08:23:54.762Z",
                    "total_completed": 20
                },
                {
                    "rank": 34,
                    "_id": "68f8b1d7854ec983b29d7184",
                    "email": "arpanisonline@gmail.com",
                    "name": "Arpan vala",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/38cd1f4d-0018-4a7f-86a3-697ed6d68871",
                    "house_id": 1,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 1,
                        "labs_completed": 0,
                        "total_completed": 1
                    },
                    "week2": {
                        "badges_completed": 18,
                        "labs_completed": 1,
                        "total_completed": 19
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-29T08:23:54.935Z",
                    "createdAt": "2025-10-22T10:28:39.946Z",
                    "updatedAt": "2025-10-29T08:23:54.936Z",
                    "progressReachedAt": "2025-10-29T08:23:54.935Z",
                    "total_completed": 20
                },
                {
                    "rank": 35,
                    "_id": "68f8b1d8854ec983b29d71b8",
                    "email": "lakhankiyadharmikkumar@gmail.com",
                    "name": "LAKHANKIYA DHARMIKKUMAR HARESHBHAI",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/c37a8b64-8617-4d1b-a6d3-13694fa44fe0",
                    "house_id": 3,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 11,
                        "labs_completed": 1,
                        "total_completed": 12
                    },
                    "week2": {
                        "badges_completed": 8,
                        "labs_completed": 0,
                        "total_completed": 8
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-29T08:23:55.608Z",
                    "createdAt": "2025-10-22T10:28:40.769Z",
                    "updatedAt": "2025-10-29T08:23:55.608Z",
                    "progressReachedAt": "2025-10-29T08:23:55.608Z",
                    "total_completed": 20
                },
                {
                    "rank": 36,
                    "_id": "68f8b1d8854ec983b29d71bc",
                    "email": "stailor1080@gmail.com",
                    "name": "Tailor Sumit Jigneshbhai",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/69f9a94b-2a7c-44a6-978b-000908535591",
                    "house_id": 7,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 6,
                        "labs_completed": 0,
                        "total_completed": 6
                    },
                    "week2": {
                        "badges_completed": 13,
                        "labs_completed": 1,
                        "total_completed": 14
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-29T08:23:55.661Z",
                    "createdAt": "2025-10-22T10:28:40.825Z",
                    "updatedAt": "2025-10-29T08:23:55.662Z",
                    "progressReachedAt": "2025-10-29T08:23:55.661Z",
                    "total_completed": 20
                },
                {
                    "rank": 37,
                    "_id": "68f8b1da854ec983b29d7204",
                    "email": "dhriti.shri.30@gmail.com",
                    "name": "Dhriti Shrivastava",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/dc5cf706-36ad-452a-811e-67892c64b189",
                    "house_id": 2,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 1,
                        "labs_completed": 0,
                        "total_completed": 1
                    },
                    "week2": {
                        "badges_completed": 18,
                        "labs_completed": 1,
                        "total_completed": 19
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-29T08:23:56.671Z",
                    "createdAt": "2025-10-22T10:28:42.220Z",
                    "updatedAt": "2025-10-29T08:23:56.671Z",
                    "progressReachedAt": "2025-10-29T08:23:56.671Z",
                    "total_completed": 20
                },
                {
                    "rank": 38,
                    "_id": "68f8b1db854ec983b29d7260",
                    "email": "hetaxi.tapodhan@gmail.com",
                    "name": "Hetaxi Mahipal Tapodhan",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/2ef8508c-47f3-41df-b7ea-fa55bea0c88a",
                    "house_id": 2,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 4,
                        "labs_completed": 0,
                        "total_completed": 4
                    },
                    "week2": {
                        "badges_completed": 15,
                        "labs_completed": 1,
                        "total_completed": 16
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-29T08:23:57.839Z",
                    "createdAt": "2025-10-22T10:28:43.901Z",
                    "updatedAt": "2025-10-29T08:23:57.840Z",
                    "progressReachedAt": "2025-10-29T08:23:57.839Z",
                    "total_completed": 20
                },
                {
                    "rank": 39,
                    "_id": "68f8b1dd854ec983b29d72d4",
                    "email": "armanamreliya33@gmail.com",
                    "name": "Arman Amreliya",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/a6f1adcc-25a0-4fcc-8f72-ffa6b3918046",
                    "house_id": 1,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 17,
                        "labs_completed": 0,
                        "total_completed": 17
                    },
                    "week2": {
                        "badges_completed": 2,
                        "labs_completed": 1,
                        "total_completed": 3
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-29T08:23:59.368Z",
                    "createdAt": "2025-10-22T10:28:45.978Z",
                    "updatedAt": "2025-10-29T08:23:59.369Z",
                    "progressReachedAt": "2025-10-29T08:23:59.368Z",
                    "total_completed": 20
                },
                {
                    "rank": 40,
                    "_id": "68f8b1df854ec983b29d7324",
                    "email": "24csjit079@ldce.ac.in",
                    "name": "MOCHI JITKUMAR SANJAYKUMAR",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/581a21c0-3cfa-431c-b015-a84f381d24c0",
                    "house_id": 4,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 2,
                        "labs_completed": 0,
                        "total_completed": 2
                    },
                    "week2": {
                        "badges_completed": 17,
                        "labs_completed": 1,
                        "total_completed": 18
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-29T08:24:00.440Z",
                    "createdAt": "2025-10-22T10:28:47.319Z",
                    "updatedAt": "2025-10-29T08:24:00.442Z",
                    "progressReachedAt": "2025-10-29T08:24:00.440Z",
                    "total_completed": 20
                },
                {
                    "rank": 41,
                    "_id": "68f8b1df854ec983b29d732c",
                    "email": "parthivdholiya0099@gmail.com",
                    "name": "Dholiya Parthiv Kiritbhai",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/925b4930-e4d4-4775-bfca-166b5dfab8c7",
                    "house_id": 2,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 2,
                        "labs_completed": 0,
                        "total_completed": 2
                    },
                    "week2": {
                        "badges_completed": 17,
                        "labs_completed": 1,
                        "total_completed": 18
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-29T08:24:00.542Z",
                    "createdAt": "2025-10-22T10:28:47.464Z",
                    "updatedAt": "2025-10-29T08:24:00.543Z",
                    "progressReachedAt": "2025-10-29T08:24:00.542Z",
                    "total_completed": 20
                },
                {
                    "rank": 42,
                    "_id": "68f8b1df854ec983b29d7338",
                    "email": "krrish.chandegara07@gmail.com",
                    "name": "Krrish Chandegara",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/a0f3c08c-c3b8-4379-bf35-bc6847098298",
                    "house_id": 3,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 8,
                        "labs_completed": 0,
                        "total_completed": 8
                    },
                    "week2": {
                        "badges_completed": 11,
                        "labs_completed": 1,
                        "total_completed": 12
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-29T08:24:00.693Z",
                    "createdAt": "2025-10-22T10:28:47.653Z",
                    "updatedAt": "2025-10-29T08:24:00.694Z",
                    "progressReachedAt": "2025-10-29T08:24:00.693Z",
                    "total_completed": 20
                },
                {
                    "rank": 43,
                    "_id": "68f8b1d3854ec983b29d7070",
                    "email": "rushah512@gmail.com",
                    "name": "Rutva Shah",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/321ca8ab-9fe4-45cd-9df8-431f9bdf0821",
                    "house_id": 6,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 13,
                        "labs_completed": 0,
                        "total_completed": 13
                    },
                    "week2": {
                        "badges_completed": 6,
                        "labs_completed": 1,
                        "total_completed": 7
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-30T08:26:56.150Z",
                    "createdAt": "2025-10-22T10:28:35.158Z",
                    "updatedAt": "2025-10-30T08:26:56.153Z",
                    "progressReachedAt": "2025-10-30T08:26:56.150Z",
                    "total_completed": 20
                },
                {
                    "rank": 44,
                    "_id": "68f8b1d5854ec983b29d70d8",
                    "email": "priyanshujagad129@gmail.com",
                    "name": "Priyanshu Jyotindrabhai Jagad",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/f4ef7ab1-3d3d-4698-b701-112539f67730",
                    "house_id": 5,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 5,
                        "labs_completed": 0,
                        "total_completed": 5
                    },
                    "week2": {
                        "badges_completed": 14,
                        "labs_completed": 1,
                        "total_completed": 15
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-30T08:26:58.232Z",
                    "createdAt": "2025-10-22T10:28:37.259Z",
                    "updatedAt": "2025-10-30T08:26:58.233Z",
                    "progressReachedAt": "2025-10-30T08:26:58.232Z",
                    "total_completed": 20
                },
                {
                    "rank": 45,
                    "_id": "68f8b1d5854ec983b29d70dc",
                    "email": "y1autonomy@gmail.com",
                    "name": "Champawat Nagendrasingh",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/e35fe960-4e21-472b-8d77-09e05cb13039",
                    "house_id": 1,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 3,
                        "labs_completed": 0,
                        "total_completed": 3
                    },
                    "week2": {
                        "badges_completed": 16,
                        "labs_completed": 1,
                        "total_completed": 17
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-30T08:26:58.315Z",
                    "createdAt": "2025-10-22T10:28:37.318Z",
                    "updatedAt": "2025-10-30T08:26:58.316Z",
                    "progressReachedAt": "2025-10-30T08:26:58.315Z",
                    "total_completed": 20
                },
                {
                    "rank": 46,
                    "_id": "68f8b1d7854ec983b29d7150",
                    "email": "sarangramani1@gmail.com",
                    "name": "Ramani Sarang",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/a6c98dfe-6bc7-4a47-be03-43023e20c909",
                    "house_id": 6,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 3,
                        "labs_completed": 0,
                        "total_completed": 3
                    },
                    "week2": {
                        "badges_completed": 16,
                        "labs_completed": 1,
                        "total_completed": 17
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-30T08:27:00.534Z",
                    "createdAt": "2025-10-22T10:28:39.090Z",
                    "updatedAt": "2025-10-30T08:27:00.534Z",
                    "progressReachedAt": "2025-10-30T08:27:00.534Z",
                    "total_completed": 20
                },
                {
                    "rank": 47,
                    "_id": "68f8b1d8854ec983b29d71a8",
                    "email": "pilojparaaditi@gmail.com",
                    "name": "Pilojpara Aditi Dharmeshbhai",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/df221a0b-1d78-4a41-b988-725618cb64b9",
                    "house_id": 5,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week2": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-30T08:27:02.228Z",
                    "createdAt": "2025-10-22T10:28:40.509Z",
                    "updatedAt": "2025-10-30T08:27:02.229Z",
                    "progressReachedAt": "2025-10-30T08:27:02.228Z",
                    "total_completed": 20
                },
                {
                    "rank": 48,
                    "_id": "68f8b1d9854ec983b29d71dc",
                    "email": "24ittis020@ldce.ac.in",
                    "name": "Tisha Varma",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/280ce3c2-38c4-474a-8692-d758fb3d80e5",
                    "house_id": 7,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week2": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-30T08:27:03.237Z",
                    "createdAt": "2025-10-22T10:28:41.359Z",
                    "updatedAt": "2025-10-30T08:27:03.238Z",
                    "progressReachedAt": "2025-10-30T08:27:03.237Z",
                    "total_completed": 20
                },
                {
                    "rank": 49,
                    "_id": "68f8b1da854ec983b29d7200",
                    "email": "23cspra046@ldce.ac.in",
                    "name": "Gohil Pranavkumar Bhupendrabhai",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/2547682d-9756-488e-91cf-d7813c845f9f",
                    "house_id": 2,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week2": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-30T08:27:03.913Z",
                    "createdAt": "2025-10-22T10:28:42.126Z",
                    "updatedAt": "2025-10-30T08:27:03.914Z",
                    "progressReachedAt": "2025-10-30T08:27:03.913Z",
                    "total_completed": 20
                },
                {
                    "rank": 50,
                    "_id": "68f8b1da854ec983b29d7220",
                    "email": "24ecdev055@ldce.ac.in",
                    "name": "Devansh Dipakbhai Kashiyani",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/c9651904-dfcd-41b3-9547-9f381d8cbbed",
                    "house_id": 2,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 7,
                        "labs_completed": 0,
                        "total_completed": 7
                    },
                    "week2": {
                        "badges_completed": 12,
                        "labs_completed": 1,
                        "total_completed": 13
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-30T08:27:04.531Z",
                    "createdAt": "2025-10-22T10:28:42.651Z",
                    "updatedAt": "2025-10-30T08:27:04.532Z",
                    "progressReachedAt": "2025-10-30T08:27:04.531Z",
                    "total_completed": 20
                },
                {
                    "rank": 51,
                    "_id": "68f8b1dd854ec983b29d72cc",
                    "email": "harshil.p.patel6239@gmail.com",
                    "name": "Patel Harshilkumar Pankajbhai",
                    "profileUrl": "https://www.cloudskillsboost.google/public_profiles/20bdbe38-fdbb-40ce-8021-a54d5a3224d5",
                    "house_id": 5,
                    "badges_completed": 19,
                    "badges": [
                        "The Basics of Google Cloud Compute [Skill Badge]",
                        "Get Started with Cloud Storage [Skill Badge]",
                        "Get Started with Pub/Sub [Skill Badge]",
                        "Get Started with API Gateway [Skill Badge]",
                        "Get Started with Looker [Skill Badge]",
                        "Get Started with Dataplex [Skill Badge]",
                        "Get Started with Google Workspace Tools [Skill Badge]",
                        "App Building with AppSheet [Skill Badge]",
                        "Develop with Apps Script and AppSheet [Skill Badge]",
                        "Build a Website on Google Cloud [Skill Badge]",
                        "Set Up a Google Cloud Network [Skill Badge]",
                        "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge]",
                        "Cloud Run Functions: 3 Ways [Skill Badge]",
                        "App Engine: 3 Ways [Skill Badge]",
                        "Cloud Speech API: 3 Ways [Skill Badge]",
                        "Monitoring in Google Cloud [Skill Badge]",
                        "Analyze Speech and Language with Google APIs [Skill Badge]",
                        "Prompt Design in Vertex AI [Skill Badge]",
                        "Develop Gen AI Apps with Gemini and Streamlit [Skill Badge]"
                    ],
                    "labs_completed": 1,
                    "labs": [
                        "Level 3: Generative AI [Game]"
                    ],
                    "week1": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week2": {
                        "badges_completed": 19,
                        "labs_completed": 1,
                        "total_completed": 20
                    },
                    "week3": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "week4": {
                        "badges_completed": 0,
                        "labs_completed": 0,
                        "total_completed": 0
                    },
                    "lastUpdated": "2025-10-30T08:27:08.039Z",
                    "createdAt": "2025-10-22T10:28:45.841Z",
                    "updatedAt": "2025-10-30T08:27:08.040Z",
                    "progressReachedAt": "2025-10-30T08:27:08.039Z",
                    "total_completed": 20
                }
            ],
            "filters": {
                "completed": 20
            },
            "count": 51
        }
    }];

const [searchTerm, setSearchTerm] = useState('');
    const [houseFilter, setHouseFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');

    const leaderboardData = data[0]?.data?.leaderboard || [];
    const totalCompleted = data[0]?.data?.count || 0;

    // Tier configuration
    const tiers = [
        { name: 'Tier 1 - Bronze', threshold: 100, color: '#D84315', bgColor: '#FBE9E7', icon: '🥇' },
        { name: 'Tier 2 - Silver', threshold: 70, color: '#546E7A', bgColor: '#ECEFF1', icon: '🥈' },
        { name: 'Tier 3 - Gold', threshold: 50, color: '#F57C00', bgColor: '#FFF3E0', icon: '🥉' }
    ];

    // Determine active tier
    const getActiveTier = () => {
        if (totalCompleted >= 100) return tiers[0];
        if (totalCompleted >= 70) return tiers[1];
        if (totalCompleted >= 50) return tiers[2];
        return null;
    };

    const activeTier = getActiveTier();
    
    const getEligibleCount = () => {
        if (!activeTier) return 0;
        return activeTier.threshold;
    };

    const getWaitingCount = () => {
        if (!activeTier) return totalCompleted;
        return Math.max(0, totalCompleted - activeTier.threshold);
    };

    const getHouseName = (houseId) => {
        const houses = {
            1: 'Gryffindor',
            2: 'Hufflepuff',
            3: 'Ravenclaw',
            4: 'Slytherin'
        };
        return houses[houseId] || 'Unknown';
    };

    const getParticipantStatus = (rank) => {
        if (!activeTier) return 'Waiting for Next Tier';
        return rank <= activeTier.threshold ? 'Eligible' : 'Waiting for Next Tier';
    };

    const getRemainingForTier = (threshold) => {
        return Math.max(0, threshold - totalCompleted);
    };

    // Filter participants
    const filteredParticipants = leaderboardData.filter(participant => {
        const matchesSearch = participant.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesHouse = houseFilter === 'all' || participant.house_id === parseInt(houseFilter);
        const participantStatus = getParticipantStatus(participant.rank);
        const matchesStatus = statusFilter === 'all' || 
            (statusFilter === 'eligible' && participantStatus === 'Eligible') ||
            (statusFilter === 'waiting' && participantStatus === 'Waiting for Next Tier');
        
        return matchesSearch && matchesHouse && matchesStatus;
    });

    const top3 = leaderboardData.slice(0, 3);

    return (
        <div className="hall-of-fame-container">
            {/* Header */}
            <div className="hall-header">
                <h1>🏆 Hall of Fame</h1>
                <p className="subtitle">Celebrating Our Cloud Champions</p>
            </div>

            {/* Tier Status Section */}
            <div className="tier-status-section">
                <div className="tier-cards">
                    {tiers.map((tier, index) => (
                        <div 
                            key={index}
                            className={`tier-card ${activeTier?.name === tier.name ? 'active' : ''} ${totalCompleted >= tier.threshold ? 'unlocked' : ''}`}
                            style={{
                                borderColor: totalCompleted >= tier.threshold ? tier.color : '#dadce0'
                            }}
                        >
                            <div className="tier-icon" style={{ 
                                background: totalCompleted >= tier.threshold ? tier.bgColor : '#f1f3f4',
                                color: totalCompleted >= tier.threshold ? tier.color : '#80868b'
                            }}>
                                {tier.icon}
                            </div>
                            <h3 className="tier-name" style={{ 
                                color: totalCompleted >= tier.threshold ? tier.color : '#5f6368' 
                            }}>
                                {tier.name}
                            </h3>
                            <p className="tier-threshold">{tier.threshold} Participants</p>
                            {activeTier?.name === tier.name && (
                                <div className="tier-badge-active">ACTIVE</div>
                            )}
                            {totalCompleted >= tier.threshold && activeTier?.name !== tier.name && (
                                <div className="tier-badge-unlocked">UNLOCKED</div>
                            )}
                            {totalCompleted < tier.threshold && (
                                <div className="tier-remaining">
                                    {getRemainingForTier(tier.threshold)} remaining
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Current Status */}
                {activeTier && (
                    <div className="current-status" style={{ borderLeftColor: activeTier.color }}>
                        <h3>Current Status</h3>
                        <div className="status-info">
                            <div className="status-item">
                                <span className="status-label">Total Completed:</span>
                                <span className="status-value highlight">{totalCompleted}</span>
                            </div>
                            <div className="status-item">
                                <span className="status-label">Eligible Participants:</span>
                                <span className="status-value" style={{ color: '#388E3C' }}>{getEligibleCount()}</span>
                            </div>
                            <div className="status-item">
                                <span className="status-label">Waiting List:</span>
                                <span className="status-value" style={{ color: '#F57C00' }}>{getWaitingCount()}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Swag Announcement */}
            <div className="swag-announcement">
                <div className="swag-main-card">
                    <span className="swag-icon">🎁</span>
                    <div className="swag-content">
                        <h2 className="swag-heading">Exclusive Swags for Top 100 Champions!</h2>
                        <p className="swag-description">
                            Amazing swags will be provided to the <strong>first 100 students</strong> who complete all requirements. 
                            Make sure you're in the <strong style={{ color: '#1e8e3e' }}>Eligible</strong> zone to claim your rewards!
                        </p>
                    </div>
                </div>

                <div className="swag-info-cards">
                    <div className="info-card eligible-card">
                        <div className="info-icon">✅</div>
                        <h3>You're Eligible?</h3>
                        <p>Congratulations! You've secured your spot in the top 100. Keep an eye out for swag distribution details!</p>
                    </div>
                    <div className="info-card waiting-card">
                        <div className="info-icon">🚀</div>
                        <h3>On the Waiting List?</h3>
                        <p>Don't worry! Push your friends and teammates to complete their requirements. When enough participants join, we'll unlock the next tier and you'll become eligible!</p>
                    </div>
                </div>

                <div className="swag-cta">
                    <p className="cta-text">
                        <strong>💡 Pro Tip:</strong> The more students who complete their badges, the faster we unlock new tiers. 
                        Share your progress and motivate your peers to join the Cloud Champions community!
                    </p>
                </div>
            </div>

            {/* Top 3 Podium */}
            {top3.length > 0 && (
                <div className="podium-section">
                    <h2 className="section-title">🌟 Top Champions</h2>
                    <div className="podium">
                        {/* Second Place */}
                        {top3[1] && (
                            <div className="podium-place second">
                                <div className="podium-card">
                                    <div className="podium-rank">🥈</div>
                                    <div className="podium-name">{top3[1].name}</div>
                                    <div className="podium-house">{getHouseName(top3[1].house_id)}</div>
                                    <div className="podium-stats">
                                        <span className="podium-stat badges">{top3[1].badges_completed} Badges</span>
                                        <span className="podium-stat labs">{top3[1].labs_completed} Labs</span>
                                    </div>
                                    <div className="podium-total">{top3[1].total_completed} Total</div>
                                    <a href={top3[1].profileUrl} target="_blank" rel="noopener noreferrer" className="podium-link">
                                        View Profile →
                                    </a>
                                </div>
                                <div className="podium-stand second-stand">
                                    <div className="stand-number">2</div>
                                </div>
                            </div>
                        )}

                        {/* First Place */}
                        {top3[0] && (
                            <div className="podium-place first">
                                <div className="podium-card">
                                    <div className="podium-rank">🥇</div>
                                    <div className="podium-name">{top3[0].name}</div>
                                    <div className="podium-house">{getHouseName(top3[0].house_id)}</div>
                                    <div className="podium-stats">
                                        <span className="podium-stat badges">{top3[0].badges_completed} Badges</span>
                                        <span className="podium-stat labs">{top3[0].labs_completed} Labs</span>
                                    </div>
                                    <div className="podium-total">{top3[0].total_completed} Total</div>
                                    <a href={top3[0].profileUrl} target="_blank" rel="noopener noreferrer" className="podium-link">
                                        View Profile →
                                    </a>
                                </div>
                                <div className="podium-stand first-stand">
                                    <div className="stand-number">1</div>
                                </div>
                            </div>
                        )}

                        {/* Third Place */}
                        {top3[2] && (
                            <div className="podium-place third">
                                <div className="podium-card">
                                    <div className="podium-rank">🥉</div>
                                    <div className="podium-name">{top3[2].name}</div>
                                    <div className="podium-house">{getHouseName(top3[2].house_id)}</div>
                                    <div className="podium-stats">
                                        <span className="podium-stat badges">{top3[2].badges_completed} Badges</span>
                                        <span className="podium-stat labs">{top3[2].labs_completed} Labs</span>
                                    </div>
                                    <div className="podium-total">{top3[2].total_completed} Total</div>
                                    <a href={top3[2].profileUrl} target="_blank" rel="noopener noreferrer" className="podium-link">
                                        View Profile →
                                    </a>
                                </div>
                                <div className="podium-stand third-stand">
                                    <div className="stand-number">3</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* All Participants Table */}
            {leaderboardData.length > 0 && (
                <div className="participants-section">
                    <h2 className="section-title">All Champions</h2>
                    
                    {/* Filters */}
                    <div className="table-filters">
                        <div className="filter-item search-filter">
                            <input
                                type="text"
                                placeholder="🔍 Search by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>
                        <div className="filter-item">
                            <select
                                value={houseFilter}
                                onChange={(e) => setHouseFilter(e.target.value)}
                                className="filter-select"
                            >
                                <option value="all">All Houses</option>
                                <option value="1">Gryffindor</option>
                                <option value="2">Hufflepuff</option>
                                <option value="3">Ravenclaw</option>
                                <option value="4">Slytherin</option>
                            </select>
                        </div>
                        <div className="filter-item">
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="filter-select"
                            >
                                <option value="all">All Status</option>
                                <option value="eligible">Eligible</option>
                                <option value="waiting">Waiting for Next Tier</option>
                            </select>
                        </div>
                    </div>

                    {/* Results count */}
                    <div className="results-count">
                        Showing {filteredParticipants.length} of {leaderboardData.length} participants
                    </div>

                    {/* Table */}
                    <div className="participants-table-wrapper">
                        <table className="participants-table">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>House</th>
                                    <th>Status</th>
                                    <th>Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredParticipants.map((participant) => {
                                    const status = getParticipantStatus(participant.rank);
                                    const isEligible = status === 'Eligible';
                                    
                                    return (
                                        <tr key={participant._id} className="table-row">
                                            <td className="rank-cell" data-label="Rank">
                                                <span className="rank-badge">#{participant.rank}</span>
                                            </td>
                                            <td className="name-cell" data-label="Name">{participant.name}</td>
                                            <td className="house-cell" data-label="House">
                                                <span className={`house-badge house-${participant.house_id}`}>
                                                    {getHouseName(participant.house_id)}
                                                </span>
                                            </td>
                                            <td className="status-cell" data-label="Status">
                                                <span className={`status-badge ${isEligible ? 'status-eligible' : 'status-waiting'}`}>
                                                    {isEligible ? '✓ Eligible' : '⏳ Waiting'}
                                                </span>
                                            </td>
                                            <td className="action-cell" data-label="Profile">
                                                <a 
                                                    href={participant.profileUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="view-link"
                                                >
                                                    View Profile
                                                </a>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {filteredParticipants.length === 0 && (
                        <div className="no-results">
                            <p>No participants found matching your filters.</p>
                        </div>
                    )}
                </div>
            )}

            {leaderboardData.length === 0 && (
                <div className="no-data">
                    <p>No participants have completed the requirements yet.</p>
                </div>
            )}
        </div>
    );
}

export default AllCompleted;