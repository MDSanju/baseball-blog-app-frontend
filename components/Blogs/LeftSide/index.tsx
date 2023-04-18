import { CardsCarousel, Comment, useStyles } from "@/components";
import {
  StyledBlogButton,
  StyledBlogText,
  StyledBoldText,
  StyledTitle,
} from "@/styles/landing.styles";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  Image,
  List,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconMessageCircle,
  IconPhoto,
  IconSettings,
} from "@tabler/icons-react";
import React from "react";

const LeftSide = () => {
  const { classes } = useStyles();
  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <Button variant="subtle">Baseball</Button>
      </Box>
      <StyledTitle>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
        blanditiis!
      </StyledTitle>
      <Box mt={42}>
        <Image
          src="https://i.ibb.co/VjFDQHF/bat.jpg"
          alt="Blog image"
          style={{
            width: "45%",
            float: "left",
            marginRight: "20px",
            marginBottom: "20px",
          }}
        />
        <StyledBlogText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quae?
          Ipsam, debitis. Iste minus magni, aut mollitia alias id ducimus nisi
          molestias maxime labore laudantium praesentium vel enim est numquam
          explicabo rem culpa animi. Quasi nostrum est eum minima voluptas alias
          a facere perspiciatis. Illo quasi placeat vitae beatae velit dolore
          eveniet at iste ex, fuga suscipit, libero perspiciatis a! Dolor quis
          dolorem esse quaerat blanditiis aliquam tenetur saepe debitis mollitia
          doloremque delectus libero sapiente voluptatum quibusdam nobis iusto
          consequatur nulla consequuntur eveniet quisquam, enim accusamus unde?
          Id, vitae. Beatae est laudantium commodi dolores et dicta, expedita
          iusto officia amet dolor, labore doloribus eum dignissimos delectus
          natus! Dignissimos sed accusantium fugiat deleniti, nemo cumque
          ducimus quod optio voluptas aliquam qui recusandae libero architecto
          velit beatae odio, culpa ea facere quis mollitia, est cupiditate. Sint
          mollitia deleniti porro iure eaque velit cumque. Placeat, nesciunt
          eveniet accusamus odio sequi animi praesentium.
        </StyledBlogText>
        <Box my={30} style={{ textAlign: "center" }}>
          <StyledBlogButton>Official Site</StyledBlogButton>
        </Box>
        <StyledBlogText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          voluptatem temporibus similique, quaerat, nobis dignissimos
          consectetur quidem veniam rem distinctio esse, nostrum repellendus
          maxime maiores aut. Magnam dolores nobis placeat consectetur. Numquam
          architecto nisi quia aperiam, sapiente in provident voluptatem at
          nulla repellat culpa commodi libero magnam officia eius! Excepturi,
          ratione, doloremque quidem alias, praesentium nemo facilis voluptate
          est unde omnis commodi beatae aperiam!
        </StyledBlogText>
        <StyledBlogText style={{ margin: "24px 0px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          obcaecati quod, alias nam iusto voluptas natus autem facilis a ab
          similique praesentium laborum eaque possimus dicta dolor vero eius
          odio aliquam architecto distinctio adipisci nobis! Eos nulla natus
          labore sapiente est impedit obcaecati deleniti repudiandae.
        </StyledBlogText>
        <StyledBlogText style={{ margin: "24px 0px" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          ipsum ut reprehenderit quidem quisquam, dolor quos necessitatibus.
          Recusandae enim aliquam tempora sunt eveniet earum iure, in eos
          commodi voluptatum autem mollitia adipisci debitis modi vel iste quae
          eaque amet esse! Eligendi, dolore, ad illum pariatur consequuntur
          impedit est distinctio, eveniet maiores in enim obcaecati autem
          incidunt.
        </StyledBlogText>
        <StyledBoldText>
          Read more details in the exclusive Baseball Bat review which follows
          below.
        </StyledBoldText>
        <Image
          src="https://i.ibb.co/FX3SNf3/josh-hemsley-e-f17-L4-EBBc-unsplash.jpg"
          alt="Blog image"
        />
        <Box>
          <Text
            c="blue"
            fz="sm"
            fs="italic"
            td="underline"
            tt="uppercase"
            mt={20}
            mb={20}
            fw={500}
            sx={{ cursor: "pointer" }}
          >
            Read More
          </Text>
        </Box>
      </Box>
      <StyledTitle style={{ textAlign: "left", margin: "30px 0" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
        blanditiis!
      </StyledTitle>
      <Box>
        <StyledBlogText style={{ margin: "24px 0px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          reiciendis harum ut, odio consequuntur iste nisi cum maiores
          voluptates perferendis eveniet exercitationem enim, fugiat numquam!
          Fugit suscipit saepe alias! Dolore obcaecati repellendus dolor error
          earum, doloribus eligendi quod laborum beatae harum velit atque? Ullam
          iste dicta eum reprehenderit quisquam error quibusdam atque, modi nisi
          non impedit ex inventore alias excepturi autem molestiae
          necessitatibus vitae deleniti optio. Accusamus esse aliquam ratione
          iste, animi voluptas laudantium ad dolore in nemo facilis cumque
          cupiditate! Fuga excepturi aliquam dolor facilis.
        </StyledBlogText>
        <StyledBlogText style={{ margin: "36px 0" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          voluptate, veritatis, adipisci exercitationem ipsum ea facilis nisi,
          illo commodi aliquam in at debitis fuga consequuntur esse impedit
          eaque a saepe accusantium. Quod eligendi vero quidem sed. Nemo iste
          quis impedit consectetur? Dolores, molestiae deleniti ducimus,
          accusantium autem placeat vero impedit non praesentium dignissimos
          rerum neque error ipsam vel? At esse repellendus consequatur deleniti
          iusto voluptate quo qui sed itaque! Rem, nulla quod.
        </StyledBlogText>

        <Image
          src="https://i.ibb.co/jJpK6xR/jimmy-conover-SEQ2-VI0-KI6-A-unsplash.jpg"
          alt="Blog image"
        />
        <StyledBoldText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit:
        </StyledBoldText>
        <List withPadding c="#535353">
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In rem
            aperiam minus. Blanditiis itaque provident minus.
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
            aperiam?
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            laborum, nemo sed eveniet doloremque ipsum recusandae numquam
            expedita maxime corporis temporibus quae, et aspernatur ab ipsam
            quos ut?
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            veritatis?
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            perferendis unde necessitatibus porro? Dolor ipsam, repellendus
            voluptas consequatur consequuntur blanditiis et explicabo voluptate
            quasi asperiores non, architecto saepe earum adipisci?
          </List.Item>
        </List>
      </Box>
      <Box>
        <StyledTitle style={{ textAlign: "left", margin: "30px 0" }}>
          Lorem ipsum, dolor sit amet consectetur
        </StyledTitle>
        <StyledBlogText style={{ margin: "24px 0px" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ea est
          ad, delectus quidem nisi esse incidunt similique voluptas eum a
          distinctio blanditiis, nam possimus vitae obcaecati, dignissimos
          magnam perferendis earum mollitia. Necessitatibus explicabo voluptatum
          neque fuga debitis fugiat modi ullam voluptatibus illo? Nisi tenetur
          iste magni odio!
        </StyledBlogText>
      </Box>
      <Box>
        <StyledTitle style={{ textAlign: "left", margin: "30px 0" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
          eaque.
        </StyledTitle>
        <StyledBlogText style={{ margin: "24px 0px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab
          repellendus quia quibusdam, commodi possimus, cum dolorum ex quisquam
          accusamus reprehenderit. Ratione aut maxime ad quae facere voluptatum.
          Minima facilis maxime consequatur laborum at accusamus praesentium?
          Cupiditate eligendi officia dolorum. Minus fugiat iste, corrupti
          assumenda nostrum dolorum sunt dicta quis provident blanditiis nam
          recusandae dolor maiores, tenetur quibusdam nisi omnis. Amet fugiat
          ducimus magni ex, id in nobis rerum.
        </StyledBlogText>
      </Box>
      <Box>
        <StyledBoldText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae culpa
          dignissimos commodi quos eligendi explicabo animi error cupiditate,
          incidunt esse:
        </StyledBoldText>
        <List withPadding c="#535353">
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit amet
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </List.Item>
        </List>
      </Box>
      <Box>
        <StyledBlogText style={{ margin: "24px 0px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab
          repellendus quia quibusdam, commodi possimus, cum dolorum ex quisquam
          accusamus reprehenderit. Ratione aut maxime ad quae facere voluptatum.
          Minima facilis maxime consequatur laborum at accusamus praesentium?
          Cupiditate eligendi officia dolorum. Minus fugiat iste, corrupti
          assumenda nostrum dolorum sunt dicta quis provident blanditiis nam
          recusandae dolor maiores, tenetur quibusdam nisi omnis.
        </StyledBlogText>
        <Box mt={20}>
          <Image
            src="https://i.ibb.co/Jpmvhdq/chris-briggs-Fobz-AZJGM9-M-unsplash.jpg"
            alt="Blog image"
            style={{
              width: "45%",
              float: "left",
              marginRight: "20px",
              marginBottom: "20px",
            }}
          />
          <StyledBlogText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            quae? Ipsam, debitis. Iste minus magni, aut mollitia alias id
            ducimus nisi molestias maxime labore laudantium praesentium vel enim
            est numquam explicabo rem culpa animi. Quasi nostrum est eum minima
            voluptas alias a facere perspiciatis. Illo quasi placeat vitae
            beatae velit dolore eveniet at iste ex, fuga suscipit, libero
            perspiciatis a! Dolor quis dolorem esse quaerat blanditiis aliquam
            tenetur saepe debitis mollitia doloremque delectus libero sapiente
            voluptatum quibusdam nobis iusto consequatur nulla consequuntur
            eveniet quisquam, enim accusamus unde? Id, vitae. Beatae est
            laudantium commodi dolores et dicta, expedita iusto officia amet
            dolor!
          </StyledBlogText>
        </Box>
      </Box>
      <Box mt={36} sx={{ width: "86%", margin: "auto" }}>
        <Alert icon={<IconAlertCircle size="1rem" />} title="Note Bene!">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          repellat numquam iusto incidunt hic neque. Deserunt maxime voluptas
          nisi sit amet nemo veniam consequatur soluta accusamus neque
          exercitationem quo tempore cupiditate obcaecati laudantium, hic
          temporibus, unde, voluptate quasi dolore nam. Repudiandae quia
          nostrum!
        </Alert>
      </Box>
      <Box>
        <StyledTitle style={{ textAlign: "left", margin: "30px 0" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
          eaque.
        </StyledTitle>
        <StyledBlogText style={{ margin: "24px 0px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab
          repellendus quia quibusdam, commodi possimus, cum dolorum ex quisquam
          accusamus reprehenderit. Ratione aut maxime ad quae facere voluptatum.
          Minima facilis maxime consequatur laborum at accusamus praesentium?
          Cupiditate eligendi officia dolorum. Minus fugiat iste, corrupti
          assumenda nostrum dolorum sunt dicta quis provident blanditiis nam
          recusandae dolor maiores, tenetur quibusdam nisi omnis. Amet fugiat
          ducimus magni ex, id in nobis rerum.
        </StyledBlogText>
        <StyledBoldText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae culpa
          dignissimos commodi quos eligendi explicabo animi error cupiditate,
          incidunt esse:
        </StyledBoldText>
        <List type="ordered" withPadding c="#535353">
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
            minima est earum aliquam possimus, laborum dolores!
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            tenetur illum asperiores sit sequi? Natus a aliquid optio voluptates
            maxime.
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est
            fugiat quia possimus mollitia illum?
          </List.Item>
        </List>
      </Box>
      <Box>
        <StyledTitle style={{ textAlign: "left", margin: "30px 0" }}>
          Lorem, ipsum dolor sit ?
        </StyledTitle>
        <Image
          src="https://i.ibb.co/947Q9Dr/chris-chow-Bhw-RQr08-Pc-M-unsplash.jpg"
          alt="Blog image"
        />
        <StyledBlogText style={{ margin: "24px 0px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab
          repellendus quia quibusdam, commodi possimus, cum dolorum ex quisquam
          accusamus reprehenderit. Ratione aut maxime ad quae facere voluptatum.
        </StyledBlogText>
        <StyledBoldText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          similique! Autem iste commodi aperiam inventore officia.
        </StyledBoldText>
        <List withPadding c="#535353">
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In rem
            aperiam minus. Blanditiis itaque provident minus.
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In rem
            aperiam minus. Blanditiis itaque provident minus.
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In rem
            aperiam minus. Blanditiis itaque provident minus.
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
            aperiam?
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            laborum, nemo sed eveniet doloremque ipsum recusandae numquam
            expedita maxime corporis temporibus quae, et aspernatur ab ipsam
            quos ut?
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            veritatis?
          </List.Item>
          <List.Item mt={10} mb={10}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            perferendis unde necessitatibus porro? Dolor ipsam, repellendus
            voluptas consequatur consequuntur blanditiis et explicabo voluptate
            quasi asperiores non, architecto saepe earum adipisci?
          </List.Item>
        </List>
      </Box>
      <Box>
        <StyledTitle style={{ textAlign: "left", margin: "30px 0" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          aperiam.
        </StyledTitle>
        <Image
          src="https://i.ibb.co/947Q9Dr/chris-chow-Bhw-RQr08-Pc-M-unsplash.jpg"
          alt="Blog image"
        />
        <StyledBlogText style={{ margin: "24px 0px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          adipisci? Perspiciatis, reprehenderit recusandae enim totam doloribus
          eaque odit voluptatem eligendi debitis quas esse earum. Architecto
          velit placeat, beatae nostrum ratione aperiam alias enim suscipit
          harum totam eos, sit blanditiis quod cum natus repudiandae facere
          quaerat? Blanditiis, voluptatibus vel!
        </StyledBlogText>
      </Box>
      <Box mt={24} sx={{ width: "86%", margin: "auto" }}>
        <Alert
          icon={<IconAlertCircle size="1rem" />}
          title="Bummer!"
          color="orange"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          cupiditate minima ipsam distinctio ullam, corrupti sed nam odit quidem
          laborum obcaecati laudantium sint provident repudiandae. Totam cumque
          laborum obcaecati laudantium sint provident repudiandae. earum sunt
          rem, sed eligendi!
        </Alert>
      </Box>
      <Box my={30} style={{ textAlign: "center" }}>
        <StyledBlogButton>Official Site</StyledBlogButton>
      </Box>
      <Box my={72}>
        <Title
          order={2}
          size="h1"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
          weight={500}
          align="center"
        >
          LOREM IPSUM
        </Title>
        <Tabs defaultValue="Demo-1" mt={24}>
          <Tabs.List>
            <Tabs.Tab value="Demo-1" icon={<IconPhoto size="0.8rem" />}>
              Demo-1
            </Tabs.Tab>
            <Tabs.Tab value="Demo-2" icon={<IconMessageCircle size="0.8rem" />}>
              Demo-2
            </Tabs.Tab>
            <Tabs.Tab value="Demo-3" icon={<IconSettings size="0.8rem" />}>
              Demo-3
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Demo-1" pt="xs">
            <Box>
              <Group noWrap>
                <Avatar
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                  size={94}
                  radius="md"
                />
                <div>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    SOFTWARE ENGINEER
                  </Text>
                  <Text fz="lg" fw={500} className={classes.name}>
                    Robert Glassbreaker
                  </Text>
                  <Group noWrap spacing={10} mt={3}>
                    <Text fz="xs" c="dimmed">
                      robert@glassbreaker.io
                    </Text>
                  </Group>
                  <Group noWrap spacing={10} mt={5}>
                    <Text fz="xs" c="dimmed">
                      +11 (876) 890 56 23
                    </Text>
                  </Group>
                </div>
              </Group>
            </Box>
          </Tabs.Panel>

          <Tabs.Panel value="Demo-2" pt="xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            architecto impedit tenetur in ullam similique cum enim ex numquam
            neque, dolor fuga molestias doloribus deserunt vitae est excepturi
            officiis reprehenderit obcaecati ipsam rerum laboriosam. Rerum
            numquam voluptate doloremque nostrum vel deleniti accusamus animi
            eaque ipsum, pariatur neque porro molestiae inventore, dolorum
            quaerat aperiam recusandae. Tenetur, pariatur!
          </Tabs.Panel>

          <Tabs.Panel value="Demo-3" pt="xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            quo quae ex iure ea labore, quibusdam obcaecati reiciendis impedit
            possimus rerum ab, eveniet distinctio officia in explicabo
            repudiandae magnam. Voluptates, commodi ducimus.
          </Tabs.Panel>
        </Tabs>
        <Divider size="sm" color="#dee2e6" mt={10} />
      </Box>
      <Box mt={48}>
        <CardsCarousel />
      </Box>
      <Box mt={48}>
        <Comment />
      </Box>
    </Box>
  );
};

export default LeftSide;
