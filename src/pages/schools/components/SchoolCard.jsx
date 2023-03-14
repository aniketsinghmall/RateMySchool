import { IconHeart } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
} from '@mantine/core';

import { IconLocationFilled } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

const PROVINCE_TEXT = 'Province of'

const IMAGE_URL = 'https://pimnetwork.org/wp-content/uploads/2019/07/school_placeholder.jpg'

const getShortProvince = (province) => {
  if (province?.includes(PROVINCE_TEXT)) {
    return province.replace(PROVINCE_TEXT, '').trim();
  }
  return province;
}

const createBadge = (text, icon, color) => (
  <Badge
    color={color}
    key={text}
    size="md"
    leftSection={icon}
  >
    {text}
  </Badge>
)

function SchoolCard({ school }) {
  const { name, address, province, type } = school
  const { classes, theme } = useStyles();

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={IMAGE_URL} alt={name} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {name}
          </Text>
          <Badge size="sm">{getShortProvince(province)}</Badge>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Quick Overview
        </Text>
        <Group spacing={7} mt={5}>
          {address && createBadge(address, <IconLocationFilled size={10} />, 'blue')}
          {type && createBadge(`Type: ${type}`, null, 'green')}
        </Group>
      </Card.Section>
      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}

export default SchoolCard;