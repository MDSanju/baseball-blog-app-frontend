import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";

export function Comment() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      website: "",
      comment: "",
    },
    validate: {
      name: isNotEmpty("Name is required"),
      email: isEmail("Email is required"),
      website: (value) => {
        // URL validation using regex pattern
        const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
        return value && urlPattern.test(value)
          ? null
          : "Please enter a valid website link";
      },
      comment: isNotEmpty("Please write something"),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={500}
        align="center"
      >
        WRITE A COMMENT
      </Title>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps("email")}
        />
      </SimpleGrid>

      <TextInput
        label="Website"
        placeholder="Website"
        mt="md"
        name="website"
        variant="filled"
        {...form.getInputProps("website")}
      />
      <Textarea
        mt="md"
        label="Comment"
        placeholder="Enter your comment here..."
        maxRows={10}
        minRows={5}
        autosize
        name="comment"
        variant="filled"
        {...form.getInputProps("comment")}
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          Post Comment
        </Button>
      </Group>
    </form>
  );
}
