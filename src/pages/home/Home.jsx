import { createStyles, Title, Text, Button, Container, rem } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(120),
    paddingBottom: rem(80),

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

function Home() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleViewSchools = () => {
    navigate('/schools');
  };

  return (
    <Container className={classes.wrapper} size={1400}>

      <div className={classes.inner}>
        <Title className={classes.title}>
        Empowering Students to  {' '}
          <Text component="span" className={classes.highlight} inherit>
          Shape Their Future:
          </Text>{' '}
          Rate Your School and Join the Community Driving Change!
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
          At RateMySchool, we understand that education is a crucial stepping stone towards a bright future. 
          That's why we've created a platform for students to share their experiences, rate their schools, and join a community that's driving change. 
          Join us today and unlock the power to shape your future!
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button disabled className={classes.control} size="lg" variant="default" color="gray">
            About Us
          </Button>
          <Button onClick={handleViewSchools} className={classes.control} size="lg">
            View Schools
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Home