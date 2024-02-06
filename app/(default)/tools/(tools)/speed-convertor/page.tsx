import SimpleCard from "../../../../../components/card/SimpleCard";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolSpeedConvertor from "./ToolSpeedConvertor";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Conquer Any Speed: Convert & Compare with Our Ultimate Tool!",
      title: "Speed convertor tool",
    },
    "/tools/speed-convertor/",
  );
}

export default function ToolSpeedConvertorPage() {
  return (
    <>
      <PageTitle>Speed convertor</PageTitle>

      <ToolSpeedConvertor />

      <SimpleCard>
        <BlockTitle>
          Conquer Any Speed: Convert & Compare with Our Ultimate Tool!
        </BlockTitle>
        <BlockParagraphTitle>
          Unify your speed measurements and crush conversions with our
          comprehensive Speed & Pace Converter, a user-friendly tool designed to
          empower you in any activity!
        </BlockParagraphTitle>

        <p>
          Whether you&apos;re a seasoned runner, a cycling enthusiast, or simply
          navigating everyday tasks, seamless speed and pace conversions are
          crucial. Our intuitive tool caters to your every need, eliminating the
          struggle and delivering results instantly.
        </p>

        <BlockParagraphTitle>
          Effortless Conversions, Endless Possibilities:
        </BlockParagraphTitle>

        <ul>
          <li>
            Switch units like a pro: Effortlessly convert between various speed
            and pace units, including mph, km/h, min/mile, min/km, and more.
          </li>
          <li>
            Real-time results at your fingertips: Witness conversions unfold
            instantly, allowing for quick adjustments and informed decisions.
          </li>
          <li>
            Tailored representation: Choose the units that best suit your needs
            and preferences, ensuring clarity and convenience.
          </li>
        </ul>

        <BlockParagraphTitle>
          Beyond Conversions: Comparative Insights:
        </BlockParagraphTitle>

        <ul>
          <li>
            Contextual understanding: Gain valuable insights by viewing your
            input speed or pace as a percentage compared to common benchmarks.
          </li>
          <li>
            Relate to the real world: Compare your running pace to an average
            athlete, a cheetah&apos;s sprint, or the speed of sound, gaining a
            broader perspective.
          </li>
          <li>
            Boost your knowledge: Enhance your understanding of different speed
            ranges and their applications in various contexts.
          </li>
        </ul>

        <BlockParagraphTitle>
          Designed for Everyone, Optimized for You:
        </BlockParagraphTitle>

        <ul>
          <li>
            Intuitive interface for all: Navigate with ease regardless of your
            technical expertise, ensuring smooth and efficient conversions.
          </li>
          <li>
            Your toolkit companion: Whether you&apos;re training for a marathon,
            tracking your cycling progress, or simply curious about speeds, this
            tool is your go-to resource.
          </li>
          <li>
            Free and accessible online: Start converting and comparing speeds
            today, empowering your understanding and enriching your activities.
          </li>
        </ul>

        <p>
          Ditch the confusion and embrace the power of seamless speed and pace
          conversions. Our tool equips you with the knowledge and flexibility to
          excel in any pursuit, from fitness goals to everyday tasks. Start
          exploring today and unlock a world of possibilities!
        </p>

        <BlockParagraphTitle>Key Features:</BlockParagraphTitle>

        <ul>
          <li>Extensive speed and pace unit conversion capabilities</li>
          <li>Real-time conversion results for immediate insights</li>
          <li>Comparative analysis with common speed benchmarks</li>
          <li>User-friendly interface for effortless navigation</li>
          <li>Free and readily available online</li>
        </ul>

        <p>
          Unleash the power of informed speed and pace understanding. Convert,
          compare, and conquer with our tool today!
        </p>
      </SimpleCard>
    </>
  );
}
