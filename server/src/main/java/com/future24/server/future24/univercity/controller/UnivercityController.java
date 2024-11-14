package com.future24.server.future24.univercity.controller;

import com.future24.server.future24.univercity.request.UnivercityRquest;
import com.future24.server.future24.univercity.vo.UnivercityVO;
import com.future24.server.future24.univercity.response.UniverseResponse;
import com.future24.server.future24.univercity.service.UnivercityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UnivercityController {

    private final UnivercityService univercityService;

    @PostMapping("/api/univercity")
    public ResponseEntity<List<UnivercityVO>> getUnivercity(@RequestBody UnivercityRquest request) {
        String startValue = request.getStartValue();
        List<UnivercityVO> result = univercityService.getUnivercity(startValue);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/api/major")
    public ResponseEntity<List<UniverseResponse>> getMajor(@RequestBody UnivercityRquest request) {
        String startValue = request.getStartValue();
        List<UniverseResponse> result = univercityService.getMajor(startValue);
        return ResponseEntity.ok(result);
    }
}
