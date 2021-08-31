export interface JobCatalogModel {
  id: number;
  title: string;
  description: string;
  postedAt: any;
  applicants: any[];
  experience: number[];
  ctc: number[];
  location: string[];
  job: JobModel;
  company: CompanyModel;
  recuiter: Employer;
}

export interface JobModel {
  id: number;
  role: string;
  responsibilities: string;
  profiles: Profile[];
  education: Eductaion[];
  skills: Skill[];
}

export interface CompanyModel {
  id: number;
  company: string;
  about: string;
  website: string;
  address: string;
}

export interface Employer {
  name: string;
  jobRole: string;
  phone: string;
  email: string;
}

export interface Skill {
  id: number;
  skill: string;
}

export interface Profile {
  id: number;
  profilePerk: string;
}

export interface Eductaion {
  id: number;
  education: string;
}
