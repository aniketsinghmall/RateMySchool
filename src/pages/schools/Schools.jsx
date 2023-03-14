import { Box, Center, Loader, SimpleGrid, Title } from '@mantine/core'
import React from 'react'
import { useGetSchoolsQuery } from '../../services/api/schools'
import SchoolCard from './components/SchoolCard'

const testDataNew = [{
  id: 1,
  name: "Simon Fraser University",
  province: "Province of British Columbia",
  type: "Public",
  fullAddress: "8888 University Drive, Burnaby, BC V5A 1S6",
}]

const testData = [{
  id: 1,
  name: "Simon Fraser University",
  province: "Province of British Columbia",
  address: "8888 University Drive, Burnaby, BC V5A 1S6",
  type: "Public",
}]

const Schools = () => {
  const {data, isFetching} = useGetSchoolsQuery()

  return (<Box>
    <Title>List of Schools</Title>
    {isFetching && <Loader mt='lg' variant='dots' size='lg' />}
    {data && <SimpleGrid mt='lg' cols={3} breakpoints={[
        { maxWidth: 'md', cols: 2, spacing: 'sm' },
        { maxWidth: 'sm', cols: 1, spacing: 'sm' },
      ]}>
      {data.map((school) => (
        <SchoolCard key={school.id} school={school} />
      ))}

    </SimpleGrid> }
    </Box>
  )
}

export default Schools