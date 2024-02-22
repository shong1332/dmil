export default function FooterContainer() {
  return (
    <div className="w-full bg-black flex justify-between px-12 py-20">
      <div className="text-white">
        <img
          src="https://dmil.kr/wp-content/themes/dmil/images/footer-logo.svg"
          loading="lazy"
          width="62"
          alt="logo"
        />
        <div className="my-7 text-xs leading-7 font-bold">
          디밀(디퍼런트밀리언즈)
          <br /> 서울시 강남구 논현로161길 47, 디밀 테라스빌딩 <br />
          대표이사 : 이헌주 | 개인정보보호 책임자 : 이헌주 <br />
          hi@dmil.kr
        </div>
        <div>Copyrightⓒ Different Millions co., Ltd.</div>
      </div>
      <div className="flex-row flex gap-4 items-start">
        <img
          src="https://dmil.kr/wp-content/themes/dmil/images/sns1.svg"
          loading="lazy"
          alt="instagram"
        />
        <img
          className="mr-15"
          src="https://dmil.kr/wp-content/themes/dmil/images/sns2.svg"
          loading="lazy"
          alt="facebook"
        ></img>
        <img
          src="https://dmil.kr/wp-content/themes/dmil/images/sns3.svg"
          loading="lazy"
          alt="youtube"
        ></img>
        <img
          src="https://dmil.kr/wp-content/themes/dmil/images/naver-i.svg"
          loading="lazy"
          alt="naver blog"
        ></img>
      </div>
    </div>
  );
}
