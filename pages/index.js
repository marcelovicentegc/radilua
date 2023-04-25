import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Grid, Page, Spacer, Text, Image, Divider } from "@geist-ui/core";
import Link from "next/link";
import nextI18nextConfig from "@radilua/next-i18next.config";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useTranslation("resume");
  const [isSM, setIsSM] = useState(false);
  const [isXS, setIsXS] = useState(false);

  useEffect(() => {
    setIsSM(
      window.matchMedia("(min-width: 650px) and (max-width: 900px)").matches
    );

    setIsXS(window.matchMedia("(min-width: 0) and (max-width: 650px)").matches);
  }, []);

  const [randomImageSet, setRandomImageSet] = useState([]);

  useEffect(() => {
    let arr = [];

    while (arr.length < 4) {
      let num = Math.floor(Math.random() * 14) + 1;

      if (arr.indexOf(num) === -1) {
        arr.push(num);
      }
    }

    setRandomImageSet(arr);
  }, []);

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
            {randomImageSet.map((image) => {
              return (
                <Grid xs={12} sm={6} key={image}>
                  <Image
                    src={`/images/${image}.jpg`}
                    height={isXS ? "8rem" : isSM ? "12rem" : "18em"}
                    width={isXS ? "8rem" : isSM ? "12rem" : "18em"}
                  />
                </Grid>
              );
            })}
          </Grid.Container>
          <Spacer h={0.5} />
          <Divider />
          <Spacer h={0.5} />
          <Grid.Container gap={1}>
            <Grid xs={12}>
              <div>
                <Text h4>{t("common:agenda")}</Text>
                <Text>
                  Florianópolis, Brasil {"|"} {t("common:april")} -{" "}
                  {t("common:may")}
                </Text>
                <Text>
                  São Paulo, Brasil {"|"} {t("common:may")}
                </Text>
                <Text>
                  Barcelona, España {"|"} {t("common:may")} - ?
                </Text>
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
