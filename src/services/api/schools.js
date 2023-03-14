import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const schoolsApi = createApi({
  reducerPath: 'schoolsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/schools`,
  }),
  endpoints: (builder) => ({
    getSchools: builder.query({
      query: () => '/',
      transformResponse: (response) => {
        let jsonData
        try {
          jsonData = JSON.parse(response?.body)
        } catch {
          jsonData = []
        }
        return jsonData.map((school) => ({
          id: school.Index,
          name: school.Facility_Name,
          province: school.Provider,
          address: school.Full_Addr,
          type: school.Facility_Type
        }))
      },
    }),
  }),
});

export const {
  useGetSchoolsQuery,
} = schoolsApi;
