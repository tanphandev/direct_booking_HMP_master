
interface business_navigation{
    id: string,
    type: string,
    title: string,
    uid: string,
    created: string,
    changed: string,
    entity_type: string,
    cp_slug: string,
    cp_business: any,
    cp_weight: number,
    cp_display: boolean,
    cp_page_type: any,
    cp_body: any,
    cp_title?: cp_title[],
    cp_paragraphs?: cp_paragraph[]|[],
  }
  interface cp_paragraph {
    id: number,
    lang: string,
    title: string,
    value: string
}
interface cp_title {
    lang: string,
    value: string,
}
interface footer_navigation{
    page_id: number,
    page_title: cp_title[],
    page_slug: string,
    cp_weight?: number,
    cp_display?: number,
    cp_page_type?: string
}