import { Flower, LeafyGreen, Snowflake, Sparkles, Sun } from "lucide-react";

import LayoutClient from "../../components/LayoutClient";
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
          <FooterTheme name="Automatic" theme="">
            <Sparkles size={24} strokeWidth={2} />
          </FooterTheme>
          <FooterTheme name="Spring" theme="spring">
            <Flower size={24} strokeWidth={2} />
          </FooterTheme>
          <FooterTheme name="Summer" theme="summer">
            <Sun size={24} strokeWidth={2} />
          </FooterTheme>
          <FooterTheme name="Fall" theme="fall">
            <LeafyGreen size={24} strokeWidth={2} />
          </FooterTheme>
          <FooterTheme name="Winter" theme="winter">
            <Snowflake size={24} strokeWidth={2} />
          </FooterTheme>
        </FooterThemes>
        <FooterSocial>
          <FooterSocialLink href="https://github.com/brunosabot" name="Github">
            GitHub
          </FooterSocialLink>
          <FooterSocialLink
            href="https://linkedin.com/in/brunosabot"
            name="LinkedIn"
          >
            LinkedIn
          </FooterSocialLink>
          <FooterSocialLink href="https://medium.brunosabot.dev" name="Medium">
            Medium
          </FooterSocialLink>
          <FooterSocialLink
            href={`${SITE_METADATA.siteUrl}/rss.xml`}
            name="RSS"
          >
            RSS
          </FooterSocialLink>
        </FooterSocial>
        <FooterCopyright />
      </Footer>

      <LayoutClient />
    </>
  );
}
