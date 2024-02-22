export default function HeaderContainer() {
  return (
    <div className="bg-black fixed z-50  flex px-12 w-full top-0">
      <img
        className="mr-[5%]"
        src="https://dmil.kr/wp-content/themes/dmil/images/nav-logo.svg"
        loading="lazy"
        alt="logo"
      />
      <div className="text-white text-base flex gap-4 py-5 font-bold">
        <div>회사소개</div>
        <div>크리에이터</div>
        <div>비즈니스</div>
        <div>문의하기</div>
        <div>채용</div>
        <div>FAMILY</div>
      </div>
    </div>
  );
}
