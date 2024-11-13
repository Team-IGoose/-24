package com.future24.server.future24.jobIntroduce.controller;

import com.future24.server.future24.jobIntroduce.request.AddressFilterDTO;
import com.future24.server.future24.jobIntroduce.service.JobIntroduceService;
import com.future24.server.future24.jobIntroduce.vo.JobIntroduceVO;
import com.future24.server.future24.jobSupport.vo.JobSupportVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.w3c.dom.Text;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class JobIntroduceController {

    private final JobIntroduceService jobIntroduceService;

    @GetMapping("/api/filter")
    public ResponseEntity<List<JobIntroduceVO>> filterData (@RequestBody AddressFilterDTO filterDTO
    ) {
        String startValue = filterDTO.getStartValue();
        String includeValue = filterDTO.getIncludeValue();
        List<JobIntroduceVO> result = jobIntroduceService.getFilterData(startValue, includeValue);
        return ResponseEntity.ok(result);
    }
}
