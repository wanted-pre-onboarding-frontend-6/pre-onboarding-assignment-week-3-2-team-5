const pageActiveUtils = (page: number, newPageList: any) => {
  newPageList.forEach((item: any) => {
    item.page === page ? (item.active = true) : (item.active = false);
  });
};
export default pageActiveUtils;
