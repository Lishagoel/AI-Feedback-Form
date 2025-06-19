import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: NextRequest) {
  // Simulate slight delay to mimic real API behavior
  await new Promise((res) => setTimeout(res, 1000));

  const mockResponse = {
    scores: {
      greeting: 5,
      collectionUrgency: 12,
      rebuttalCustomerHandling: 14,
      callEtiquette: 15,
      callDisclaimer: 0,
      correctDisposition: 10,
      callClosing: 5,
      fatalIdentification: 5,
      fatalTapeDiscloser: 0,
      fatalToneLanguage: 15,
    },
    overallFeedback:
      "Agent sounded professional but missed the mandatory disclaimer.",
    observation:
      "Customer was initially hesitant; agent handled the objection calmly and assertively.",
  };

  return NextResponse.json(mockResponse);
}
