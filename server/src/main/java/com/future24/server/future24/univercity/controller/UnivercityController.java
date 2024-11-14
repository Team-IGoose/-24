package com.future24.server.future24.univercity.controller;



import java.util.List;

@RestController
@RequiredArgsConstructor
public class UnivercityController {

    private final UnivercityService univercityService;


    @GetMapping("/api/univercity")
    public ResponseEntity<List<UnivercityVO>> getUnivercity(@RequestBody UniverseRequest request) {


    @PostMapping("/api/major")
    public ResponseEntity<List<UniverseResponse>> getMajor(@RequestBody UnivercityRquest request) {
        String startValue = request.getStartValue();
        List<UniverseResponse> result = univercityService.getMajor(startValue);
        return ResponseEntity.ok(result);
    }

}
