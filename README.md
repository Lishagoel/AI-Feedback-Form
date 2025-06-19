# AI Feedback Form – Next.js App

This is a full-stack web application built using **Next.js (App Router + TypeScript)** that allows users to upload call recordings, transcribes them (simulated), and evaluates agent performance based on predefined criteria.

---

## Features

- Upload `.mp3` or `.wav` audio files
- Audio player preview
- “Process” button that:
  - Sends the audio to the backend
  - Returns **mocked scores and AI feedback**
- Realistic frontend spinner and UI
- Modular styling using **CSS Modules**
- Ready for AI integration using **OpenAI Whisper + GPT**

---

## AI Processing (Simulated)

This app is built to support real AI feedback generation, using tools like:

- OpenAI Whisper for audio transcription
- GPT-4 for analyzing calls and generating feedback

### Note:
> **Currently, the AI feedback is mocked** due to OpenAI API quota limits.  
> The backend code is already implemented and can be activated by adding an API key with billing enabled.

---

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, CSS Modules
- **Backend**: API Routes in App Router (`route.ts`)
- **Tools Ready for Integration**:
  - OpenAI Whisper (transcription)
  - GPT-4 or GPT-3.5-turbo (feedback generation)

---

## How to Run Locally

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-username/ai-feedback-form.git
   cd ai-feedback-form

---

## Future Improvements

- Enable real OpenAI Whisper + GPT integration

- Add transcription preview

- Export scores/feedback as PDF

- Improve accessibility & styling

##  Author

Lisha Goel