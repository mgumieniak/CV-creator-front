export class CV {
  id: string;
  personalDetails: Map<string, any>;
  experiences: Experience[];

  constructor() {
  }

  static convert(data): CV {
    const cv = new CV();
    cv.id = data.id;
    cv.personalDetails = new Map<string, any>(Object.entries(data.personalDetails));
    cv.personalDetails.set('additionDetails', new Map(Object.entries(cv.personalDetails.get('additionDetails'))));
    cv.experiences = data.experiences.map(experience => {
      return experience as Experience;
    });
    return cv;
  }
}


export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}
