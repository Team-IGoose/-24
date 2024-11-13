package com.future24.server.future24.univercity.controller;

import com.future24.server.future24.univercity.request.UniverseRequest;
import com.future24.server.future24.univercity.service.UnivercityService;
import com.future24.server.future24.univercity.vo.UnivercityVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UnivercityController {

    private final UnivercityService univercityService;

    @GetMapping("/api/univercity")
    public ResponseEntity<List<UnivercityVO>> getUnivercity(@RequestBody UniverseRequest request) {
        String startValue = request.getStartValue();
        List<UnivercityVO> result = univercityService.getUnivercity(startValue);
        return ResponseEntity.ok(result);
    }
}
