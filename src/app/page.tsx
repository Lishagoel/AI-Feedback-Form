'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function HomePage() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleProcess = async () => {
    if (!audioFile) return;

    setLoading(true);
    setResponse(null);

    const formData = new FormData();
    formData.append('file', audioFile);

    const res = await fetch('/api/analyze-call', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setResponse(data);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>AI Feedback Form</h1>

      <div className={styles.fileInputWrapper}>
        <label htmlFor="audio-upload" className={styles.fileLabel}>
          {audioFile ? 'Change File' : 'Upload Audio'}
        </label>
        <input
          type="file"
          id="audio-upload"
          accept=".mp3,.wav"
          onChange={(e) => setAudioFile(e.target.files?.[0] ?? null)}
          className={styles.hiddenInput}
        />
        {audioFile && (
          <span className={styles.fileName}>{audioFile.name}</span>
        )}
      </div>

      {audioFile && (
        <div className={styles.audioPreview}>
          <audio controls src={URL.createObjectURL(audioFile)} />
        </div>
      )}

      {audioFile && !loading && (
        <button className={styles.button} onClick={handleProcess}>
          Process
        </button>
      )}

      {loading && (
        <div style={{ textAlign: 'center' }}>
          <div className={styles.spinner}></div>
          <p className={styles.processingText}>Analyzing audio...</p>
        </div>
      )}

      {response && (
  <div className={styles.result}>
    {response.scores && (
      <>
        <h2>Scores:</h2>
        <ul className={styles.scoreList}>
          {Object.entries(response.scores).map(([key, value]) => (
            <li key={key} className={styles.scoreItem}>
              <strong>{key}:</strong> {String(value)}
            </li>
          ))}
        </ul>
      </>
    )}

    {response.overallFeedback && (
      <div className={styles.feedback}>
        <h3>Overall Feedback:</h3>
        <p>{response.overallFeedback}</p>
      </div>
    )}

    {response.observation && (
      <div className={styles.feedback}>
        <h3>Observation:</h3>
        <p>{response.observation}</p>
      </div>
    )}
  </div>
)}
    </div>
  );
}
