import React, { useState, useEffect } from 'react'
import { Table, Button, Header, Icon } from "semantic-ui-react";
import JobPostingService from "../../services/jobPostingService";


export default function JobPostingsList() {
    const [jobPostings, setJobPostings] = useState([]);
  
    useEffect(()=>{
      let jobPostingService = new JobPostingService()
      jobPostingService.getJobPostings().then(result=>setJobPostings(result.data.data))
    },[])

    return (
        <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Job Postings List</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Is Open</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {jobPostings.map((jobPosting) => (
            <Table.Row key={jobPosting.id}>
              <Table.Cell>{jobPosting.jobPosition.titleName}</Table.Cell>
              <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
              <Table.Cell>{jobPosting.city.cityName}</Table.Cell>
              <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobPosting.active.toString()}</Table.Cell>
              <Table.Cell>
                <Button>View</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}