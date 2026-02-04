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

import LayoutClient from "../../components/LayoutClient";
import svgMedium from "../../components/svg/medium";
import { SITE_METADATA } from "../../lib/metadata";
import Footer from "./_components/Footer";
import FooterCopyright from "./_components/FooterCopyright";
import FooterSocial from "./_components/FooterSocial";
import FooterSocialLink from "./_components/FooterSocialLink";
import FooterTheme from "./_components/FooterTheme";
import FooterThemes from "./_components/FooterThemes";
import Header from "./_components/Header";
import HeaderLink from "./_components/HeaderLink";
import HeaderLinks from "./_components/HeaderLinks";
import HeaderLinksDropdown from "./_components/HeaderLinksDropdown";
import HeaderLogo from "./_components/HeaderLogo";
import Svg from "./_components/Svg";

interface IDefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: IDefaultLayoutProps) {
  return (
    <>
      <Header>
        <HeaderLogo />
        <HeaderLinks>
          <HeaderLink href="/" isMain>
            Home
          </HeaderLink>
          <HeaderLink href="/posts/" isMain>
            Blog
          </HeaderLink>
          <HeaderLink href="/tools/" isMain>
            Tools
          </HeaderLink>
          <HeaderLink href="/contact/" isMain>
            Contact
          </HeaderLink>

          <HeaderLinksDropdown>
            <HeaderLink href="/" isSecondary>
              Home
            </HeaderLink>
            <HeaderLink href="/posts/" isSecondary>
              Posts
            </HeaderLink>
            <HeaderLink href="/talks/">Talks</HeaderLink>
            <HeaderLink href="/opensource/">Open source</HeaderLink>
            <HeaderLink href="/projects/">Projects</HeaderLink>
            <HeaderLink href="/podcasts/">Podcasts</HeaderLink>
            <HeaderLink href="/videos/">Videos</HeaderLink>
            <HeaderLink href="/tools/" isSecondary>
              Tools
            </HeaderLink>
            <HeaderLink href="/resume/en/">Resume</HeaderLink>
            <HeaderLink href="/contact/" isSecondary>
              Contact
            </HeaderLink>
            <HeaderLink href="/nonow-consulting/">Nonow Consulting</HeaderLink>
          </HeaderLinksDropdown>
        </HeaderLinks>
      </Header>

      <main>{children}</main>

      <Footer>
        <FooterThemes>
          <FooterTheme icon={mdiCreation} name="Automatic" theme="" />
          <FooterTheme icon={mdiFlower} name="Spring" theme="spring" />
          <FooterTheme icon={mdiWeatherSunny} name="Summer" theme="summer" />
          <FooterTheme icon={mdiLeafMaple} name="Fall" theme="fall" />
          <FooterTheme icon={mdiSnowflake} name="Winter" theme="winter" />
        </FooterThemes>
        <FooterSocial>
          <FooterSocialLink href="https://github.com/brunosabot" name="Github">
            <Svg d={mdiGithub} size={32} />
          </FooterSocialLink>
          <FooterSocialLink
            href="https://linkedin.com/in/brunosabot"
            name="LinkedIn"
          >
            <Svg d={mdiLinkedin} size={32} />
          </FooterSocialLink>
          <FooterSocialLink href="https://medium.brunosabot.dev" name="Medium">
            <Svg d={svgMedium} size={32} />
          </FooterSocialLink>
          <FooterSocialLink
            href={`${SITE_METADATA.siteUrl}/rss.xml`}
            name="RSS"
          >
            <Svg d={mdiRss} size={32} />
          </FooterSocialLink>
        </FooterSocial>
        <FooterCopyright />
      </Footer>

      <LayoutClient />
    </>
  );
}
