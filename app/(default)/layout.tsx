import LayoutClient from "../../components/LayoutClient";
import Header from "./_components/Header";
import HeaderLogo from "./_components/HeaderLogo";
import HeaderLink from "./_components/HeaderLink";
import HeaderLinks from "./_components/HeaderLinks";
import Footer from "./_components/Footer";
import FooterSocial from "./_components/FooterSocial";
import FooterCopyright from "./_components/FooterCopyright";
import FooterSocialLink from "./_components/FooterSocialLink";
import Svg from "./_components/Svg";
import {
  mdiCreation,
  mdiFlower,
  mdiGithub,
  mdiLeafMaple,
  mdiLinkedin,
  mdiRss,
  mdiSnowflake,
  mdiWeatherSunny,
} from "@mdi/js";
import svgMedium from "../../components/svg/medium";
import { SITE_METADATA } from "../../lib/metadata";
import HeaderLinksDropdown from "./_components/HeaderLinksDropdown";
import FooterTheme from "./_components/FooterTheme";
import FooterThemes from "./_components/FooterThemes";

interface IDefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: IDefaultLayoutProps) {
  return (
    <>
      <Header>
        <HeaderLogo />
        <HeaderLinks>
          <HeaderLink isMain href="/">
            Home
          </HeaderLink>
          <HeaderLink isMain href="/posts/">
            Blog
          </HeaderLink>
          <HeaderLink isMain href="/tools/">
            Tools
          </HeaderLink>
          <HeaderLink isMain href="/contact/">
            Contact
          </HeaderLink>

          <HeaderLinksDropdown>
            <HeaderLink isSecondary href="/">
              Home
            </HeaderLink>
            <HeaderLink isSecondary href="/posts/">
              Posts
            </HeaderLink>
            <HeaderLink href="/talks/">Talks</HeaderLink>
            <HeaderLink href="/opensource/">Open source</HeaderLink>
            <HeaderLink href="/projects/">Projects</HeaderLink>
            <HeaderLink href="/podcasts/">Podcasts</HeaderLink>
            <HeaderLink href="/videos/">Videos</HeaderLink>
            <HeaderLink isSecondary href="/tools/">
              Tools
            </HeaderLink>
            <HeaderLink href="/resume/en/">Resume</HeaderLink>
            <HeaderLink isSecondary href="/contact/">
              Contact
            </HeaderLink>
            <HeaderLink href="/nonow-consulting/">Nonow Consulting</HeaderLink>
          </HeaderLinksDropdown>
        </HeaderLinks>
      </Header>

      {children}

      <Footer>
        <FooterThemes>
          <FooterTheme name="Auto" theme="" icon={mdiCreation} />
          <FooterTheme name="Spring" theme="spring" icon={mdiFlower} />
          <FooterTheme name="Summer" theme="summer" icon={mdiWeatherSunny} />
          <FooterTheme name="Fall" theme="fall" icon={mdiLeafMaple} />
          <FooterTheme name="Winter" theme="winter" icon={mdiSnowflake} />
        </FooterThemes>
        <FooterSocial>
          <FooterSocialLink href="https://github.com/brunosabot" name="Github">
            <Svg size={32} d={mdiGithub} />
          </FooterSocialLink>
          <FooterSocialLink
            href="https://linkedin.com/in/brunosabot"
            name="LinkedIn"
          >
            <Svg size={32} d={mdiLinkedin} />
          </FooterSocialLink>
          <FooterSocialLink href="https://medium.brunosabot.dev" name="Medium">
            <Svg size={32} d={svgMedium} />
          </FooterSocialLink>
          <FooterSocialLink
            href={`${SITE_METADATA.siteUrl}/rss.xml`}
            name="RSS"
          >
            <Svg size={32} d={mdiRss} />
          </FooterSocialLink>
        </FooterSocial>
        <FooterCopyright />
      </Footer>

      <LayoutClient />
    </>
  );
}
