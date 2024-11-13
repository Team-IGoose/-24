package com.future24.server.future24.jobSupport.controller;

import com.future24.server.future24.jobSupport.service.JobSupportService;
import com.future24.server.future24.jobSupport.vo.JobSupportVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class JobSupportController {

    private final JobSupportService jobSupportService;

    @PostMapping("/test")
    public ResponseEntity<?> test() {
        List<JobSupportVO> result = jobSupportService.getJobSupportData();
        return ResponseEntity.ok(result);
    }
}
