const Order = ({ onChangeLimit, onChageSort, onChangeOrder }: any) => {
  return (
    <div>
      <select onChange={onChageSort}>
        <option value="createdAt">최신순</option>
        <option value="author">이름순</option>
      </select>
      <select onChange={onChangeLimit}>
        <option value="10">10개씩 보기</option>
        <option value="20">30개씩 보기</option>
        <option value="30">50개씩 보기</option>
      </select>
      <select onChange={onChangeOrder}>
        <option value="desc">오름차순</option>
        <option value="asc">내림차순</option>
      </select>
    </div>
  );
};
export default Order;
