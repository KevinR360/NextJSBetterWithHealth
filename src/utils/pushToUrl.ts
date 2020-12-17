export interface IPushToUrl {
  valueSearch?: string;
  goToPage?: number;
  orderBy?: string;
}

export const pushToUrl = 
  ({ valueSearch = "", goToPage = 0, orderBy = '' }: IPushToUrl) => {
    const searchQuery =
      valueSearch.length > 2
        ? `search=${String(valueSearch).replace(" ", "+")}&`
        : "";

    const pageQuery = goToPage >= 1 ? `page=${goToPage}&` : "";
    
    const orderQuery = orderBy.length > 2 ? `orderby=${orderBy}` : "";

    const url = `/?${searchQuery}${pageQuery}${orderQuery}`;

    return url;
};