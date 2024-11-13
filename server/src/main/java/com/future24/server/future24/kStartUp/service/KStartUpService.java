package com.future24.server.future24.kStartUp.service;

import com.future24.server.future24.kStartUp.mapper.KStartUpMapper;
import com.future24.server.future24.kStartUp.vo.KStartUpVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class KStartUpService {
    private final KStartUpMapper kStartUpMapper;

    public List<KStartUpVO> getKStartUp(String startValue) {
        return kStartUpMapper.findBylocalName(startValue);
    }
}
