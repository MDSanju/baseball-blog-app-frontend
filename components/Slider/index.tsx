import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Blockquote,
  Box,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    // height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

interface CardProps {
  comment: string;
  writer: string;
}

function Card({ comment, writer }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      //   shadow="md"
      p="xl"
      radius="md"
      //   sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Blockquote cite={writer}>{comment}</Blockquote>
      </div>
    </Paper>
  );
}

const data = [
  {
    id: 1,
    comment:
      "Life is like an npm install – you never know what you are going to get.",
    writer: "– Forrest Gump",
  },
  {
    id: 2,
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium consequuntur.",
    writer: "– Forrest Gump",
  },
  {
    id: 3,
    comment:
      "Life is like an npm install – you never know what you are going to get.",
    writer: "– Forrest Gump",
  },
  {
    id: 4,
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium consequuntur.",
    writer: "– Forrest Gump",
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.id}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Box>
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={500}
        align="center"
      >
        COMMENTS
      </Title>
      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Box>
  );
}
