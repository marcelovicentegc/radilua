import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Grid, Page, Spacer, Text, Image, Divider } from "@geist-ui/core";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation("resume");

  return (
    <>
      <Head>
        <title>Luana Radiguet</title>
        <meta name="description" content="Artist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page
        style={{
          padding: "4rem",
        }}
      >
        {/* <Text h1>{t("hello-world")}</Text> */}
        <Page.Header>
          <div>
            <Text
              h2
              style={{
                margin: 0,
              }}
            >
              Luana Radiguet
            </Text>
            <Text
              h4
              style={{
                margin: 0,
              }}
            >
              I draw on people's skin using a needle and my hands
            </Text>
          </div>
        </Page.Header>
        <Page.Content>
          <Grid.Container gap={1} justify="center">
            <Grid xs={6}>
              <Image src={"/images/alligator.jpg"} height={"300px"} />
            </Grid>
            <Grid xs={6}>
              <Image src={"/images/rune.jpg"} height={"300px"} />
            </Grid>
            <Grid xs={6}>
              <Image src={"/images/fading-away.jpg"} height={"300px"} />
            </Grid>
            <Grid xs={6}>
              <Image src={"/images/being-born.jpg"} height={"300px"} />
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
              <div>
                <Text h4>Book an appointment</Text>
                <Link href={"mailto:radiguetluana@gmail.com"}>
                  Email me @ radiguetluana@gmail.com
                </Link>
              </div>
            </Grid>
          </Grid.Container>
        </Page.Content>
        <Page.Footer
          style={{
            paddingBottom: "1rem",
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["resume"])),
    },
  };
}
