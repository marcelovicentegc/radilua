import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  Grid,
  Page,
  Spacer,
  Text,
  Image,
  Divider,
  useMediaQuery,
} from "@geist-ui/core";
import Link from "next/link";
import nextI18nextConfig from "@radilua/next-i18next.config";

export default function Home() {
  const { t } = useTranslation("resume");
  const isSM = useMediaQuery("sm");
  const isXS = useMediaQuery("xs");

  return (
    <>
      <Head>
        <title>Radilua</title>
        <meta name="description" content="Artist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div
        style={{
          height: "1rem",
          width: "100vw",
          backgroundColor: "black",
        }}
      />
      <Page
        style={{
          padding: isSM ? "2rem" : isXS ? "1rem" : "4rem",
          minHeight: "calc(100vh - 1rem)",
        }}
      >
        <Page.Header>
          <div>
            <Text
              h2
              style={{
                margin: 0,
              }}
            >
              Radilua
            </Text>
            <Text
              h4
              style={{
                margin: 0,
              }}
            >
              {t("common:tagline")}
            </Text>
          </div>
        </Page.Header>
        <Page.Content>
          <Grid.Container gap={1} justify="center">
            <Grid xs={12} sm={6}>
              <Image
                src={"/images/alligator.jpg"}
                height={"auto"}
                style={{
                  maxHeight: "18rem",
                }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <Image
                src={"/images/rune.jpg"}
                height={"auto"}
                style={{
                  maxHeight: "18rem",
                }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <Image
                src={"/images/fading-away.jpg"}
                height={"auto"}
                style={{
                  maxHeight: "18rem",
                }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <Image
                src={"/images/being-born.jpg"}
                height={"auto"}
                style={{
                  maxHeight: "18rem",
                }}
              />
            </Grid>
          </Grid.Container>
          <Spacer h={0.5} />
          <Divider />
          <Spacer h={0.5} />
          <Grid.Container gap={1}>
            <Grid xs={12}>
              <div>
                <Text h4>Agenda</Text>
                <Text>Florianópolis, Brazil {"|"} April - May</Text>
                <Text>São Paulo, Brazil {"|"} May</Text>
                <Text>Barcelona, Spain {"|"} May - Undefined</Text>
              </div>
            </Grid>
            <Grid xs={12}>
              <div
                style={{
                  width: isXS ? "8rem" : isSM ? "16rem" : "unset",
                }}
              >
                <Text h4>{t("common:book-me")}</Text>
                <Link
                  href={"mailto:radiguetluana@gmail.com"}
                  style={{
                    wordWrap: "break-word",
                  }}
                >
                  {t("common:email-me")} @ radiguetluana@gmail.com
                </Link>
              </div>
            </Grid>
          </Grid.Container>
        </Page.Content>
        <Page.Footer
          style={{
            paddingBottom: "3rem",
            display: "flex",
          }}
        >
          <Link href={"https://instagram.com/radiilua"} target="_blank">
            @radiilua
          </Link>
          <Spacer h={0.5} />
          <Link
            href={
              "https://drive.google.com/drive/u/0/folders/1_uid6humVwgAp6zTj5UtP-l_pwUdt_bi"
            }
            target="_blank"
          >
            Resume
          </Link>
        </Page.Footer>
      </Page>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nextConfig)),
  },
});
