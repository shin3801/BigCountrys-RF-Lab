/* Add or edit field notes here. See README.md. */
window.BIGCOUNTRY_FIELD_NOTES = [
  {
    "id": "2026-10-18-m2-3-morning",
    "title": "M2-3 morning pass · no decoded frames",
    "date": "2026-10-18",
    "time": "Morning pass",
    "satellite": "METEOR-M2-3",
    "status": "UNSUCCESSFUL DECODE",
    "frequency": "137.900 MHz",
    "receiver": "RTL-SDR",
    "antenna": "Adjustable V-dipole (~54 cm arms)",
    "location": "San Francisco Bay Area · deck",
    "elevation": "~45° predicted maximum",
    "summary": "Raw I/Q recording captured, but SatDump produced no usable LRPT frames or imagery.",
    "observations": "Recorded approximately 1.3 GB of cs8 raw I/Q at 1.024 Msps with manual gain around 28 dB. A possible signal feature appeared near the expected frequency, but the offline 72k LRPT processing yielded a zero-byte CADU output and no images.",
    "hypotheses": "Signal-to-noise ratio may have been too low for reliable demodulation. Antenna orientation, polarization mismatch, obstructions, and local interference are possibilities; the cause has not been established.",
    "nextSteps": "Compare against successful M2-4 and later M2-3 passes. Keep raw I/Q recordings, log signal conditions, and test improved antenna placement and a purpose-built 137 MHz QFH antenna."
  }
];
