package com.future24.server.future24.schoolInfo.controller;

import com.future24.server.future24.schoolInfo.service.SchoolInfoService;
import com.future24.server.future24.schoolInfo.vo.SchoolInfoVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class SchoolInfoController {

    private final SchoolInfoService schoolInfoService;

    @GetMapping("/api/school-info")
    public ResponseEntity<List<SchoolInfoVO>> getAllSchoolInfo() {
        List<SchoolInfoVO> result = schoolInfoService.getSchoolInfo();
        return ResponseEntity.ok(result);
    }
}
