package com.future24.server.future24.univercity.service;

import com.future24.server.future24.univercity.mapper.UnivercityMapper;
import com.future24.server.future24.univercity.response.UniverseResponse;
import com.future24.server.future24.univercity.vo.UnivercityVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UnivercityService {

    private final UnivercityMapper univercityMapper;

    public List<UnivercityVO> getUnivercity(String startValue) {
        return univercityMapper.findByUniverse(startValue);
    }

    public List<UniverseResponse> getMajor(String startValue) {
        return univercityMapper.findCollageByUniverse(startValue);
    }
}
