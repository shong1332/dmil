import '../../css/header.css';

export default function HeaderContainer() {
  return (
    <div className="bg-black fixed z-50 flex justify-between px-12 w-full top-0">
      <div className=" flex">
        <img
          className="mr-[5%]"
          src="https://dmil.kr/wp-content/themes/dmil/images/nav-logo.svg"
          loading="lazy"
          alt="logo"
        />
        <div className="text-white text-base flex font-bold  whitespace-nowrap">
          <div className="item">회사소개</div>
          <div className="item">크리에이터</div>
          <div className="item">비즈니스</div>
          <div className="item">문의하기</div>
          <div className="item">채용</div>
          <div className="item">FAMILY</div>
        </div>
      </div>

      <img
        src="https://dmil.kr/wp-content/themes/dmil/images/search.svg"
        loading="lazy"
        alt=""
      ></img>
    </div>
  );
}
