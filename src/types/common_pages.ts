interface CommonPages {
    id: string;
    type?: string,
    title?: string,
    uid?: string,
    created?: string,
    changed?:string,
    entity_type?: string,
    cp_slug : string,
    cp_business?:{
        entity_id: number,
        title: string,
        info?: string|""
    },
    cp_weight?: number,
    cp_display?: boolean,   
    cp_page_type?:{
        id: string,
        title: string,
    },
    cp_body: cp_body[],
    cp_title: cp_title[],
    cp_paragraphs: cp_paragraph[],
  }
  interface cp_body{
    lang: string,
    value: string
  }