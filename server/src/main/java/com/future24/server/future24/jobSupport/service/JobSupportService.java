package com.future24.server.future24.jobSupport.service;

import com.future24.server.future24.jobSupport.mapper.JobSupportMapper;
import com.future24.server.future24.jobSupport.vo.JobSupportVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class JobSupportService {

    private final JobSupportMapper jobSupportMapper;

    public List<JobSupportVO> getJobSupportData() {
        return jobSupportMapper.findJobSupportVO();
    }

}
