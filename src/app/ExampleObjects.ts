export class Character {
    id: number;
    name: string;
}

export class Job {
  jobs: [{
    data: {
        title: string;
        street_address: string;
        city: string;
        state: string;
        categories: [{
          name: string
        }];
        meta_data: {
          googlejobs: {
            jobSummary: string;
          }
        };
    }
  }];
}