package com.future24.server.future24.jobProgram.service;

import com.future24.server.future24.jobProgram.mapper.JobProgramMapper;
import com.future24.server.future24.jobProgram.vo.JobProgramVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobProgramService {

    private final JobProgramMapper jobProgramMapper;

    public List<JobProgramVO> getJobPrograms() {
        return jobProgramMapper.findAll();
    }
}
