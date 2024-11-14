package com.future24.server.future24.jobProgram.controller;

import com.future24.server.future24.jobProgram.service.JobProgramService;
import com.future24.server.future24.jobProgram.vo.JobProgramVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class JobProgramController {

    private final JobProgramService jobProgramService;

    @PostMapping("/api/job-program")
    public ResponseEntity<List<JobProgramVO>> getJobPrograms() {
        return ResponseEntity.ok(jobProgramService.getJobPrograms());
    }
}
