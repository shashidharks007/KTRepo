export interface Option {
    value: string;
    label: string;
  }
  
  export interface Pagedetails{
      id: number;
      name: string;
  }
  
  export interface FormElement {
    id: string;
    type: string;
    label: string;
    required: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    options?: Option[];
    value?: string;
    errormessages?: Option[];
  }
  
  export interface FormData {
    elements: FormElement[];
  }
  
  export interface ControlData {
      id: string;
  }