export class CV {
  id: string;
  personalDetails: Map<string, any>;
  experience: Map<string, string>;

  constructor() {
  }
  
  static convert(data): CV {
    const cv = new CV();
    cv.id = data.id;
    cv.personalDetails = new Map<string, any>(Object.entries(data.personalDetails));
    cv.experience = new Map<string, any>(Object.entries(data.experience));
    return cv;
  }
}

