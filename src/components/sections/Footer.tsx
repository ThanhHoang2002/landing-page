import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative"
    >
      <Image src="/bg/footer.svg" alt="banner" width={1920} height={1080} className="w-full" />
        <div
        className="fb-page absolute! top-0 right-0"
        data-href="https://www.facebook.com/linhsamsontuu"
        data-tabs="timeline"
        data-width=""
        data-height="70"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </footer>
  );
}

