// Type declarations for modules without bundled types
declare module 'pdfjs-dist/build/pdf.mjs' {
  export const version: string;
  export const GlobalWorkerOptions: {
    workerSrc: string;
  };
  export function getDocument(params: { data: ArrayBuffer }): {
    promise: Promise<PDFDocumentProxy>;
  };
  export interface PDFDocumentProxy {
    numPages: number;
    getPage(pageNum: number): Promise<PDFPageProxy>;
    getMetadata(): Promise<{ info?: Record<string, unknown> }>;
  }
  export interface PDFPageProxy {
    getTextContent(): Promise<{ items: Array<{ str?: string; type?: string }> }>;
    getAnnotations(): Promise<Array<{ url?: string }>>;
  }
}

declare module 'tesseract.js' {
  export function recognize(
    image: File | Blob | string,
    lang: string,
    options?: { logger?: (m: unknown) => void },
  ): Promise<{
    data: {
      text: string;
      confidence: number;
    };
  }>;
  export function createWorker(langs?: string): Promise<{
    recognize: (image: File | Blob | string) => Promise<{ data: { text: string; confidence: number } }>;
    terminate: () => Promise<void>;
  }>;
}
