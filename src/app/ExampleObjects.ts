export class Character {
    id: number;
    name: string;
}

export interface Job {
  
  title: string;
  req_id: string;
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