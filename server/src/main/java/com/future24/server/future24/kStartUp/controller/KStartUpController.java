package com.future24.server.future24.kStartUp.controller;

import com.future24.server.future24.kStartUp.request.KStartUpRequest;
import com.future24.server.future24.kStartUp.service.KStartUpService;
import com.future24.server.future24.kStartUp.vo.KStartUpVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class KStartUpController {

    private final KStartUpService kStartUpService;

    @GetMapping("/api/start_up")
    public ResponseEntity<List<KStartUpVO>> getKStartUp(@RequestBody KStartUpRequest request) {
        String startValue = request.getStartValue();
        List<KStartUpVO> result = kStartUpService.getKStartUp(startValue);
        return ResponseEntity.ok(result);
    }
}
